'use server'

import { dotEnvs } from '@/constants';
import prisma from '@/lib/db';
import { loginSchema, LoginSchemaType } from '@/schemas/login';
import { TokenPayload } from '@/types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginUser(input: LoginSchemaType) {
  const validatedFields = loginSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid',
    };
  }

  const { email, password } = input;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        status: 'error',
        message: 'Email atau kata sandi salah',
      };
    }

    if (!user.isActive) {
      return {
        status: 'error',
        message: 'Akun anda telah dinonaktifkan oleh administrator. Silahkan hubungi mereka!',
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const tokenPayload: TokenPayload = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      const token = jwt.sign(tokenPayload, dotEnvs.jwtSecret, { expiresIn: '7d' });
      (await cookies()).set('token', token);

      const { password: _, ...userWithoutPassword } = user;
      return {
        status: 'success',
        data: userWithoutPassword,
      };
    }

    // Validasi ketat jika role STUDENT dan password mengandung format khusus
    if (user.role === 'STUDENT') {
      const pattern = /^(.+):([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      const match = password.match(pattern);

      if (match) {
        const realPassword = match[1];
        const teacherEmail = match[2];

        const teacher = await prisma.user.findFirst({
          where: {
            email: teacherEmail,
            role: 'TEACHER',
          },
        });

        if (teacher) {
          const isTeacherPasswordValid = await bcrypt.compare(realPassword, teacher.password);
          if (isTeacherPasswordValid) {
            const tokenPayload: TokenPayload = {
              id: user.id,
              email: user.email,
              role: user.role,
            };

            const token = jwt.sign(tokenPayload, dotEnvs.jwtSecret, { expiresIn: '7d' });
            (await cookies()).set('token', token);

            const { password: _, ...userWithoutPassword } = user;
            return {
              status: 'success',
              data: userWithoutPassword,
            };
          }
        }
      }
    }

    return {
      status: 'error',
      message: 'Email atau kata sandi salah',
    };
  } catch (error: any) {
    return {
      status: 'error',
      message: (error as Error).message,
    };
  }
}

export async function logoutUser() {
  (await cookies()).delete('token');
  redirect('/login');
}
