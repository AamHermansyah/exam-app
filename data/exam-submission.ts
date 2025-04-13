import { dotEnvs } from "@/constants";
import prisma from "@/lib/db";
import { handleCatchError } from "@/lib/utils";
import { FetchParams, TokenPayload } from "@/types";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export async function getAllExamSubmissions({ token, page = 1, pageSize = 10 }: FetchParams) {
  try {
    // Verifikasi token
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    // Hitung offset untuk pagination
    const skip = (page - 1) * pageSize;

    // Ambil data user dari database
    const submissions = await prisma.examSubmission.findMany({
      where: { userId: decoded.id },
      include: {
        exam: {
          select: { title: true }
        }
      },
      skip,
      take: pageSize,
    });

    // Hitung total user
    const totalSubmission = await prisma.examSubmission.count({
      where: { userId: decoded.id }
    });

    return {
      data: submissions,
      total: totalSubmission,
      page,
      pageSize,
      totalPages: Math.ceil(totalSubmission / pageSize),
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

export async function getExamSubmissionDetail(submissionId: string, token: string) {
  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    const submission = await prisma.examSubmission.findUnique({
      where: { id: submissionId },
      include: {
        exam: {
          include: {
            questions: {
              include: { answers: true },
            },
          },
        },
        answers: true, // jawaban yang dipilih user
        user: { select: { id: true, fullName: true } }
      },
    });

    if (!submission) {
      return {
        status: 'success',
        data: null,
      };
    }

    if (decoded.role !== 'TEACHER' && submission.userId !== decoded.id) {
      return {
        status: 'success',
        data: null,
      };
    }

    // mapping jawaban user ke dalam struktur soal
    const questionMap = submission.exam.questions.map((q) => {
      const userAnswer = submission.answers.find(
        (a) => a.questionId === q.id
      );

      const selectedAnswerIds = userAnswer
        ? JSON.parse(userAnswer.selectedAnswerIds) as string[]
        : [];

      return {
        ...q,
        answers: q.answers.map((ans) => ({
          ...ans,
          isSelectedByUser: selectedAnswerIds.includes(ans.id),
        })),
      };
    });

    return {
      status: 'success',
      data: {
        id: submission.id,
        score: submission.score,
        correct: submission.correct,
        incorrect: submission.incorrect,
        passed: submission.passed,
        submittedAt: submission.submittedAt,
        exam: {
          id: submission.exam.id,
          title: submission.exam.title,
          questions: questionMap,
          duration: submission.exam.duration
        },
        user: submission.user
      },
    };
  } catch (error) {
    throw new Error(handleCatchError(error, 'throw'));
  }
}

export async function getExamSubmissionByExamId(
  examId: string,
  { token, page = 1, pageSize = 10 }: FetchParams
) {
  try {
    // Verifikasi token
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    if (decoded.role !== 'TEACHER') {
      throw new Error('Unauthorized');
    }

    // Hitung offset untuk pagination
    const skip = (page - 1) * pageSize;

    // Ambil data user dari database
    const examSubmission = await prisma.examSubmission.findMany({
      where: { examId },
      skip,
      take: pageSize,
      orderBy: {
        submittedAt: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            fullName: true
          }
        }
      },
    });

    // Hitung total user
    const totalExamSubmission = await prisma.examSubmission.count({
      where: { examId }
    });

    return {
      data: examSubmission,
      total: totalExamSubmission,
      page,
      pageSize,
      totalPages: Math.ceil(totalExamSubmission / pageSize),
    };
  } catch (error: any) {
    throw new Error(handleCatchError(error, 'throw'));
  }
}