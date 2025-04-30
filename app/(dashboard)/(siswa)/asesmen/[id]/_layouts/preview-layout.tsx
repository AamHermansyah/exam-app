'use client'

import React, { useState } from 'react'
import QuestionCardCheckbox from '@/components/shared/question-card-checkbox'
import QuestionCardRadio from '@/components/shared/question-card-radio'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Answer, Exam, ExamSubmission, Question, User } from '@/lib/generated/prisma'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface IProps {
  data: unknown;
  roleSearchParams?: string;
}

type ExamSubmissionType = ExamSubmission & {
  exam: Pick<Exam, 'id' | 'title' | 'duration' | 'maxScore'> & {
    questions: (Question & {
      answers: (Answer & {
        isSelectedByUser: boolean;
      })[];
      score: number;
    })[]
  };
  user: Pick<User, 'id' | 'fullName'>;
}

function PreviewLayout({ data, roleSearchParams }: IProps) {
  const examSubmission = data as ExamSubmissionType;
  const questions = examSubmission.exam.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === questions.length - 1;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl mx-auto space-y-4">
        {roleSearchParams !== 'teacher' && (
          <div>
            <Link href="/riwayat">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4" />
                Kembali
              </Button>
            </Link>
          </div>
        )}
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-medium">{examSubmission.exam.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-4 p-4 border rounded-lg shadow-sm bg-gray-50">
            <div>
              <p className="text-sm text-muted-foreground">Nama:</p>
              <p className="font-medium">{examSubmission.user.fullName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Skor:</p>
              <p className="font-medium">{examSubmission.exam.maxScore} Poin</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Skor (%):</p>
              <p className="font-medium">{examSubmission.score}/100%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Durasi Asesmen:</p>
              <p className="font-medium">{examSubmission.exam.duration} menit</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Benar:</p>
              <p className="font-medium">{examSubmission.correct} soal</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Salah:</p>
              <p className="font-medium">{examSubmission.incorrect} soal</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Pertanyaan:</p>
              <p className="font-medium">{questions.length} soal</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status:</p>
              <p className="font-medium">
                {examSubmission.passed ? (
                  <Badge variant="info" className="rounded-full">Tuntas</Badge>
                ) : (
                  <Badge variant="destructive" className="rounded-full">Tidak Tuntas</Badge>
                )}
              </p>
            </div>
          </div>
        </div>

        <span className="w-max h-9 text-sm flex items-center px-4 py-2 bg-primary text-white shadow-sm rounded-md">
          Soal {currentQuestionIndex + 1} dari {questions.length}
        </span>

        <div className="space-y-2">
          {currentQuestion.type === 'CHECKBOX' ? (
            <>
              <QuestionCardCheckbox
                question={currentQuestion.title}
                answers={currentQuestion.answers}
                imageUrl={currentQuestion.image}
                imageLabel={currentQuestion.imageLabel}
                correctAnswers={
                  currentQuestion.answers
                    .filter((ans) => ans.isCorrect)
                    .map((ans) => ans.id)
                }
                selectedAnswers={
                  currentQuestion.answers
                    .filter((ans) => ans.isSelectedByUser)
                    .map((ans) => ans.id)
                }
              />
              <span className="block text-center font-semibold text-sm">
                {currentQuestion.score} dari {currentQuestion.answers.filter((a) => a.isCorrect).length} Poin
              </span>
            </>
          ) : (
            <>
              <QuestionCardRadio
                question={currentQuestion.title}
                answers={currentQuestion.answers}
                imageUrl={currentQuestion.image}
                imageLabel={currentQuestion.imageLabel}
                correctAnswer={currentQuestion.answers[currentQuestion.correctAnswerIndex!]?.id}
                selectedAnswer={
                  currentQuestion.answers
                    .find((ans) => ans.isSelectedByUser)?.id
                }
              />
              <span className="block text-center font-semibold text-sm">
                {currentQuestion.score} dari {currentQuestion.correctAnswerIndex! < 0 ? 0 : 1} Poin
              </span>
            </>
          )}
        </div>

        {/* Navigasi */}
        <div className="w-full flex justify-between gap-2 items-center">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            disabled={isFirst}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button
            className="gap-2"
            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
            disabled={isLast}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PreviewLayout
