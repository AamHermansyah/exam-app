import { dotEnvs } from '@/constants';
import prisma from '@/lib/db';
import { handleCatchError } from '@/lib/utils';
import { FetchParams, TokenPayload } from '@/types';
import jwt from 'jsonwebtoken';

type GetExamInput = {
  token: string;
  examId: string;
  onlyPublish?: boolean;
  includeQuestions?: boolean;
  includeSubmission?: boolean;
};

export async function getExamDetailById(examId: string, token: string) {
  try {
    // Verifikasi token
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    if (decoded.role !== 'TEACHER') {
      throw new Error('Unauthorized access');
    }

    // Ambil data exam lengkap
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      include: {
        _count: {
          select: {
            questions: true,
            ExamSubmission: true
          }
        }
      },
    });

    if (!exam) {
      throw new Error('Data not found');
    }

    return {
      status: 'success',
      data: exam,
    };
  } catch (error: any) {
    throw new Error(handleCatchError(error, 'throw'));
  }
}

export async function getExamById({
  token,
  examId,
  onlyPublish,
  includeQuestions,
  includeSubmission
}: GetExamInput) {
  try {
    // Verifikasi token
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    if (!onlyPublish && decoded.role !== 'TEACHER') {
      throw new Error('Unauthorized access');
    }

    // Ambil data exam lengkap
    const exam = await prisma.exam.findUnique({
      where: {
        id: examId,
        publishedAt: onlyPublish ? { not: null } : undefined,
      },
      include: {
        questions: includeQuestions ? {
          orderBy: { createdAt: 'asc' },
          include: {
            answers: {
              orderBy: { id: 'asc' },
            },
          },
        } : undefined,
        ExamSubmission: includeSubmission ? {
          where: { userId: decoded.id },
        } : undefined,
      },
    });

    if (!exam) {
      return {
        status: 'success',
        data: null,
      };
    }

    return {
      status: 'success',
      data: exam,
    };
  } catch (error: any) {
    throw new Error(handleCatchError(error, 'throw'));
  }
}

export async function getAllPublishExams({ token, page = 1, pageSize = 10 }: FetchParams) {
  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    const skip = (page - 1) * pageSize;

    const publishExams = await prisma.exam.findMany({
      where: { publishedAt: { not: null } },
      skip,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: {
          select: { ExamSubmission: true },
        },
        ExamSubmission: {
          where: { userId: decoded.id },
        },
      },
    });

    const totalPublishExams = await prisma.exam.count({
      where: { publishedAt: { not: null } },
    });

    const examsWithSubmissionStatus = publishExams.map((exam) => {
      const hasSubmitted = exam.ExamSubmission.length > 0;

      return {
        ...exam,
        submissionCount: exam._count.ExamSubmission,
        hasSubmitted,
      };
    });

    return {
      data: examsWithSubmissionStatus,
      total: totalPublishExams,
      page,
      pageSize,
      totalPages: Math.ceil(totalPublishExams / pageSize),
    };
  } catch (error: any) {
    throw new Error(handleCatchError(error, 'throw'));
  }
}

export async function getAllExams({ token, page = 1, pageSize = 10 }: FetchParams) {
  try {
    // Verifikasi token
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    if (decoded.role !== 'TEACHER') {
      throw new Error('Unauthorized');
    }

    // Hitung offset untuk pagination
    const skip = (page - 1) * pageSize;

    // Ambil data user dari database
    const exams = await prisma.exam.findMany({
      skip,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        // Hitung jumlah submission untuk setiap ujian
        _count: {
          select: {
            questions: true,
            ExamSubmission: true
          },
        },
      },
    });

    // Hitung total user
    const totalExams = await prisma.exam.count();

    return {
      data: exams,
      total: totalExams,
      page,
      pageSize,
      totalPages: Math.ceil(totalExams / pageSize),
    };
  } catch (error: any) {
    throw new Error(handleCatchError(error, 'throw'));
  }
}

