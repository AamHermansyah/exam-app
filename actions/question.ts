'use server'

import { dotEnvs } from '@/constants';
import prisma from '@/lib/db';
import { handleCatchError } from '@/lib/utils';
import { questionsSchema, QuestionsSchemaType } from '@/schemas/exam';
import { TokenPayload } from '@/types';
import jwt from 'jsonwebtoken';

export async function createOrEditQuestionWithAnswers(
  input: QuestionsSchemaType,
  examId: string,
  token: string,
  type: 'create' | 'edit',
  questionId?: string
) {
  const validatedFields = questionsSchema.safeParse(input);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Input tidak valid'
    };
  }

  const {
    title,
    image,
    imageLabel,
    type: questionType,
    answers,
    correctAnswerIndex,
  } = input;

  try {
    const decoded = jwt.verify(token, dotEnvs.jwtSecret) as TokenPayload;

    if (decoded.role !== 'TEACHER') {
      return {
        status: 'error',
        message: 'Unauthorized'
      };
    }

    if (!answers || answers.length < 1) {
      return {
        status: 'error',
        message: 'At least one answer is required'
      };
    }

    if (
      questionType === 'RADIO' &&
      (correctAnswerIndex === undefined || correctAnswerIndex < 0 || correctAnswerIndex >= answers.length)
    ) {
      return {
        status: 'error',
        message: 'Correct answer index is required and must be valid for radio type questions'
      };
    }

    if (type === 'create') {
      let score = questionType === 'RADIO' ? 1 : answers.filter((a) => a.isCorrect).length;

      const newQuestion = await prisma.question.create({
        data: {
          title,
          image,
          imageLabel,
          type: questionType,
          exam: {
            connect: { id: examId },
          },
          correctAnswerIndex: questionType === 'RADIO' ? correctAnswerIndex : null,
          answers: {
            create: answers.map((answer) => ({
              answerText: answer.answerText,
              isCorrect: answer.isCorrect,
            })),
          },
        },
        include: {
          answers: true,
        },
      });

      await prisma.exam.update({
        where: { id: newQuestion.examId },
        data: {
          maxScore: {
            increment: score
          }
        }
      });

      return {
        status: 'success',
        data: newQuestion,
      };
    }

    if (type === 'edit') {
      if (!questionId) {
        return {
          status: 'error',
          message: 'Question ID is required for edit operation',
        };
      }

      const question = await prisma.question.findUnique({
        where: { id: questionId },
        select: {
          id: true,
          answers: true,
          examId: true
        }
      });

      if (!question) {
        return {
          status: 'error',
          message: 'Question not found',
        };
      }

      const updatedQuestion = await prisma.question.update({
        where: { id: questionId },
        data: {
          title,
          image,
          imageLabel,
          type: questionType,
          correctAnswerIndex: questionType === 'RADIO' ? correctAnswerIndex : null,
        },
      });

      // Delete existing answers
      await prisma.answer.deleteMany({
        where: {
          questionId,
        },
      });

      // Create new answers
      await prisma.answer.createMany({
        data: answers.map((answer) => ({
          answerText: answer.answerText,
          isCorrect: answer.isCorrect,
          questionId: updatedQuestion.id,
        })),
      });

      const score = questionType === 'RADIO' ? 1 : question.answers.filter((a) => a.isCorrect).length;
      const currentScore = questionType === 'RADIO' ? 1 : answers.filter((a) => a.isCorrect).length;
      const scoreDifference = currentScore - score;
      await prisma.exam.update({
        where: { id: question.examId },
        data: {
          maxScore: {
            increment: scoreDifference,
          },
        },
      });

      return {
        status: 'success',
      };
    }

    return {
      status: 'error',
      message: 'Invalid operation type',
    };
  } catch (error: any) {
    return handleCatchError(error, 'return');
  }
}
