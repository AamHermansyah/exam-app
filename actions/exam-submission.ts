'use server'

import { dotEnvs } from "@/constants";
import prisma from "@/lib/db";
import { handleCatchError, isSubmissionExpired } from "@/lib/utils";
import { FetchParams, TokenPayload } from "@/types";
import jwt from "jsonwebtoken";

type CreateExamSubmissionInput = {
  examId: string;
  duration: number;
  token: string;
}

export async function createExamSubmission(input: CreateExamSubmissionInput) {
  const { examId, duration, token } = input

  // Menghitung expireAt berdasarkan waktu sekarang ditambah durasi ujian
  const now = new Date()
  const expireAt = new Date(now.getTime() + duration * 60 * 1000)

  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    const submission = await prisma.examSubmission.create({
      data: {
        examId,
        userId: decoded.id,
        expireAt,
      },
    })

    return {
      status: 'success',
      data: submission
    }
  } catch (error: any) {
    return handleCatchError(error, 'return');
  }
}

type SubmitAnswerInput = {
  questionId: string;
  selectedAnswerIds: string[];
};

type SubmitExamInput = {
  token: string;
  examId: string;
  answers: SubmitAnswerInput[];
};

export async function submitExam({ token, examId, answers }: SubmitExamInput) {
  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret as string) as TokenPayload;

    // Cek apakah exam masih aktif
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      include: {
        ExamSubmission: {
          where: { userId: decoded.id },
        },
      }
    });

    const examSubmission = exam?.ExamSubmission[0];

    if (!exam) {
      return {
        status: 'error',
        message: 'Exam not found'
      }
    }

    if (!examSubmission || !examSubmission.expireAt) {
      return {
        status: 'error',
        message: 'Your exam submission not found'
      }
    }

    if (examSubmission.userId !== decoded.id) {
      return {
        status: 'error',
        message: 'Unauthorized'
      }
    }

    if (isSubmissionExpired(examSubmission.expireAt)) {
      return {
        status: 'error',
        message: 'The exam has already expired. Submission rejected.'
      }
    }

    // Ambil semua pertanyaan dan jawaban dari DB untuk penilaian
    const allQuestions = await prisma.question.findMany({
      where: { examId },
      include: { answers: true },
    });

    let totalCorrect = 0;

    for (const question of allQuestions) {
      const studentAnswer = answers.find((a) => a.questionId === question.id);
      if (!studentAnswer) continue;

      const correctAnswerIds = question.answers
        .filter((a) => a.isCorrect)
        .map((a) => a.id)
        .sort();

      const selectedIds = [...studentAnswer.selectedAnswerIds].sort();

      const isCorrect =
        question.type === 'RADIO'
          ? selectedIds.length === 1 && correctAnswerIds.length === 1 && selectedIds[0] === correctAnswerIds[0]
          : JSON.stringify(correctAnswerIds) === JSON.stringify(selectedIds);

      if (isCorrect) totalCorrect++;
    }

    const totalScore = (totalCorrect / allQuestions.length) * 100;
    const isPassed = exam?.minScore ? totalScore >= exam.minScore : false;

    //  submission
    const submission = await prisma.examSubmission.update({
      where: { id: examSubmission.id },
      data: {
        correct: totalCorrect,
        incorrect: allQuestions.length - totalCorrect,
        score: totalScore,
        passed: isPassed,
        answers: {
          create: answers.map((ans) => ({
            questionId: ans.questionId,
            selectedAnswerIds: JSON.stringify(ans.selectedAnswerIds),
          })),
        },
      },
    });

    return {
      status: 'success',
      data: {
        submissionId: submission.id,
      }
    };
  } catch (error: any) {
    return handleCatchError(error, 'return');
  }
}