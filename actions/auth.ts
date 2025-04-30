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
      message: 'Input tidak valid'
    }
  }

  const { email, password } = input;

  try {
    // Cari user berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        status: 'error',
        message: 'Email atau kata sandi salah'
      }
    }

    if (!user.isActive) {
      return {
        status: 'error',
        message: 'Akun anda telah dinonaktifkan oleh administrator. Silahkan hubungi mereka!'
      }
    }

    // Bandingkan password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        status: 'error',
        message: 'Email atau kata sandi salah'
      }
    }

    const tokenPayload: TokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(tokenPayload, dotEnvs.jwtSecret, { expiresIn: '7d' });

    (await cookies()).set('token', token);

    // Hapus password sebelum return
    const { password: _, ...userWithoutPassword } = user;
    return {
      status: 'success',
      data: userWithoutPassword
    };
  } catch (error: any) {
    return {
      status: 'error',
      message: (error as Error).message
    }
  }
}

export async function logoutUser() {
  (await cookies()).delete('token');
  redirect('/login');
}
