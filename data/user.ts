import { dotEnvs } from '@/constants';
import prisma from '@/lib/db';
import { FetchParams } from '@/types';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

export async function getAllStudents({ token, page = 1, pageSize = 10 }: FetchParams) {
  try {
    // Verifikasi token
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as {
      id: string;
      email: string;
      role: 'TEACHER' | 'STUDENT';
    };

    // Hanya teacher yang boleh mengakses semua user
    if (decoded.role !== 'TEACHER') {
      throw new Error('Unauthorized access');
    }

    // Hitung offset untuk pagination
    const skip = (page - 1) * pageSize;

    // Ambil data user dari database
    const users = await prisma.user.findMany({
      where: { role: 'STUDENT' },
      skip,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        purpose: true,
        institution: true,
        role: true,
        createdAt: true,
      },
    });

    // Hitung total user
    const totalUsers = await prisma.user.count();

    return {
      data: users,
      total: totalUsers,
      page,
      pageSize,
      totalPages: Math.ceil(totalUsers / pageSize),
    };
  } catch (error: any) {
    if (error instanceof TokenExpiredError) {
      throw new Error('Token has expired. Please login again.');
    }

    if (error instanceof JsonWebTokenError) {
      throw new Error('Invalid token. Authorization failed.');
    }

    throw new Error(`Failed to get exam: ${error.message}`);
  }
}

export async function getUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  } catch (error) {
    throw Error('Error when get user by id');
  }
}