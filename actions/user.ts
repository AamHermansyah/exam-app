'use server'

import bcrypt from 'bcrypt';
import { registerSchema, RegisterSchemaType } from "@/schemas/register";
import prisma from '@/lib/db';

export async function createUser(input: RegisterSchemaType, isTeacher: boolean) {
  const validatedFields = registerSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid'
    }
  }

  const { fullName, email, purpose, institution, password } = input;

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