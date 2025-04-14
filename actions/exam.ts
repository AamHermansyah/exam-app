'use server'

import { dotEnvs } from '@/constants';
import prisma from '@/lib/db';
import { handleCatchError } from '@/lib/utils';
import { examSchema, ExamSchemaType } from '@/schemas/exam';
import { TokenPayload } from '@/types';
import jwt from 'jsonwebtoken';

export async function createExam(input: ExamSchemaType, token: string) {
  const validatedFields = examSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid'
    }
  }

  const { title, tags, category, duration, minScore, description } = input;

  try {
    // Verifikasi token dan ambil data user
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    // Hanya teacher yang boleh membuat exam
    if (decoded.role !== 'TEACHER') {
      return {
        status: 'error',
        message: 'Unauthorized'
      }
    }

    // Simpan exam ke database
    const newExam = await prisma.exam.create({
      data: {
        title,
        tags,
        category,
        duration,
        minScore,
        description,
        authorId: decoded.id,
      },
    });

    return {
      status: 'success',
      data: newExam,
    };
  } catch (error: any) {
    return handleCatchError(error, 'return');
  }
}

export async function editExam(input: ExamSchemaType, examId: string, token: string) {
  const validatedFields = examSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid'
    }
  }

  const { title, tags, category, duration, minScore, description } = input;

  try {
    // Verifikasi token dan ambil data user
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    // Hanya teacher yang boleh membuat exam
    if (decoded.role !== 'TEACHER') {
      return {
        status: 'error',
        message: 'Unauthorized'
      }
    }

    const existingExam = await prisma.exam.findUnique({
      where: { id: examId },
    });

    if (!existingExam) {
      return {
        status: 'error',
        message: 'Data not found'
      }
    }

    // Simpan exam ke database
    const updatedExam = await prisma.exam.update({
      where: {
        id: examId
      },
      data: {
        title,
        tags,
        category,
        duration,
        minScore,
        description
      },
    });

    return {
      status: 'success',
      data: updatedExam,
    };
  } catch (error: any) {
    return handleCatchError(error, 'return');
  }
}

export async function publishExam(examId: string, token: string) {
  try {
    // Verifikasi token dan ambil data user
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    // Hanya teacher yang boleh membuat exam
    if (decoded.role !== 'TEACHER') {
      return {
        status: 'error',
        message: 'Unauthorized'
      }
    }

    const existingExam = await prisma.exam.findUnique({
      where: { id: examId },
    });

    if (!existingExam) {
      return {
        status: 'error',
        message: 'Data not found'
      }
    }

    const publishedAt = new Date();

    // Update tanggal publikasi dan kadaluarsa
    const updatedExam = await prisma.exam.update({
      where: { id: examId },
      data: { publishedAt },
    });

    return {
      status: 'success',
      data: updatedExam,
    };
  } catch (error: any) {
    return handleCatchError(error, 'return');
  }
}

export async function softDeleteExam(examId: string, token: string) {
  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    if (decoded.role !== 'TEACHER') {
      return {
        status: 'error',
        message: 'Unauthorized'
      }
    }

    const deletedExam = await prisma.exam.update({
      where: { id: examId },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });

    return {
      status: 'success',
      data: deletedExam
    }
  } catch (error) {
    return handleCatchError(error, 'return');
  }
}