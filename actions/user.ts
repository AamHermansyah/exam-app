'use server'

import bcrypt from 'bcrypt';
import { registerSchema, RegisterSchemaType } from "@/schemas/register";
import prisma from '@/lib/db';
import { changePasswordSchema, ChangePasswordSchemaType, profileSchema, ProfileSchemaType } from '@/schemas/profile';
import { TokenPayload } from '@/types';
import jwt from 'jsonwebtoken';
import { dotEnvs } from '@/constants';
import { handleCatchError } from '@/lib/utils';

export async function createUser(input: RegisterSchemaType, isTeacher: boolean) {
  const validatedFields = registerSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid'
    }
  }

  const { fullName, email, purpose, institution, password, class: studentClass } = input;

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        status: 'error',
        message: 'Email telah terdaftar'
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru ke database
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        purpose,
        class: studentClass,
        institution,
        password: hashedPassword,
        role: isTeacher ? 'TEACHER' : 'STUDENT',
      },
    });

    // Hapus password sebelum return
    const { password: _, ...userWithoutPassword } = newUser;
    return {
      status: 'success',
      data: userWithoutPassword
    };
  } catch (error) {
    return {
      status: 'error',
      message: (error as Error).message
    }
  }
}

export async function updateUser(input: ProfileSchemaType, token: string, email?: string) {
  const validatedFields = profileSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid'
    }
  }

  const { fullName, purpose, institution, class: studentClass } = input;

  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    if (email !== decoded.email && decoded.role !== 'TEACHER') {
      return {
        status: 'error',
        message: 'Unauthorized'
      };
    }

    const updatedUser = await prisma.user.update({
      where: { email: email || decoded.email },
      data: {
        fullName,
        purpose,
        institution,
        class: studentClass
      }
    });

    const { password: _, ...userWithoutPassword } = updatedUser;
    return {
      status: 'success',
      data: userWithoutPassword
    };
  } catch (error) {
    return handleCatchError(error, 'return');
  }
}

export async function changePassword(input: ChangePasswordSchemaType, token: string) {
  const validatedFields = changePasswordSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid'
    }
  }

  const { newPassword, currentPassword } = input;

  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (!user) {
      return {
        status: 'error',
        message: 'Email atau kata sandi salah'
      }
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return {
        status: 'error',
        message: 'Email atau kata sandi salah'
      }
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email: decoded.email },
      data: {
        password: hashedNewPassword,
      },
    });

    return {
      status: 'success',
      message: "Password berhasil diubah"
    };
  } catch (error) {
    return handleCatchError(error, 'return');
  }
}

export async function toggleActiveStudent(isActive: boolean, email: string, token: string) {
  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    if (decoded.role !== 'TEACHER') {
      return {
        status: 'error',
        message: 'Unauthorized'
      };
    }

    await prisma.user.update({
      where: { email: email || decoded.email },
      data: { isActive }
    });

    return {
      status: 'success',
      message: isActive ? 'Siswa berhasil diaktivasi ulang' : 'Siswa berhasil dinonaktifkan'
    };
  } catch (error) {
    return handleCatchError(error, 'return');
  }
}