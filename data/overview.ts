import { dotEnvs } from '@/constants';
import prisma from '@/lib/db';
import { TokenPayload } from '@/types';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

export async function getOverview(token: string) {
  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    if (decoded.role !== 'TEACHER') {
      throw new Error('Unauthorized access');
    }

    const durationAvgExams = await prisma.exam.aggregate({
      _avg: {
        duration: true,
      },
    });
    const totalExams = await prisma.exam.count();
    const totalExamSubmissions = await prisma.examSubmission.count();
    const totalUsers = await prisma.user.count();

    return {
      durationAvgExams: durationAvgExams._avg.duration,
      totalExams,
      totalExamSubmissions,
      totalUsers
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