'use client'

import React, { useEffect, useRef, useState, useTransition } from 'react'
import QuestionCardCheckbox from '@/components/shared/question-card-checkbox'
import QuestionCardRadio from '@/components/shared/question-card-radio'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, ArrowRight, LoaderCircle } from 'lucide-react'
import { useExamStore } from '../../_stores/use-exam-store'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Answer, Exam, ExamSubmission, Question } from '@/lib/generated/prisma'
import { submitExam } from '@/actions/exam-submission'

interface IProps {
  data: any;
  token: string;
}

type ExamPropType = Exam & {
  questions: (Question & {
    answers: Answer[];
  })[];
  ExamSubmission: ExamSubmission[];
}

function ExamLayout({ data, token }: IProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, startServer] = useTransition();
  const exam = data as ExamPropType;
  const submission = exam.ExamSubmission[0];
  const questions = exam.questions;

  const currentQuestion = questions[currentQuestionIndex];
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === questions.length - 1;
  const remainingSeconds = Math.floor((new Date(submission.expireAt).getTime() - Date.now()) / 1000);
  const navigate = useRouter();

  const {
    answers,
    setAnswer,
    countdown,
    startCountdown,
    tickCountdown,
    resetAnswers,
    resetCountdown
  } = useExamStore();

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  useEffect(() => {
    startCountdown(remainingSeconds);

    timerRef.current = setInterval(() => {
      tickCountdown();
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (countdown < 0 && timerRef.current) {
      clearInterval(timerRef.current);
      resetCountdown();
      timerRef.current = null;
    }
  }, [countdown]);

  useEffect(() => {
    if (countdown === 5 * 60) {
      toast.warning('Waktu tersisa 5 menit lagi!', {
        duration: 5000
      });
    }
  }, [countdown]);

  const handleSubmit = () => {
    const unanswered = questions.filter(q => !answers[q.id] || answers[q.id]?.answerIds.length === 0)
    if (unanswered.length > 0) {
      toast.warning('Semua soal harus dijawab!');
      return
    }

    const submitAnswers = Object.entries(answers).map(
      ([questionId, value]) => ({
        questionId,
        selectedAnswerIds: value.answerIds
      })
    );

    startServer(() => {
      submitExam({
        submitAnswers,
        examId: exam.id,
        token
      })
        .then((data) => {
          if (data.status === 'success') {
            resetAnswers();
            // @ts-ignore
            navigate.push(`/asesmen/${exam.id}/preview?submissionId=${data.data?.submissionId}`);
          } else {
            // @ts-ignore
            toast.error(data.message!);
          }
        });
    });
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl mx-auto space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-medium">{exam.title}</h2>
          <div className="p-4 text-center border rounded-lg shadow-sm bg-gray-50">
            <h4 className="text-sm">Sisa Waktu</h4>
            <span className="text-2xl font-medium text-destructive">
              {hours > 0 && (
                <>
                  {String(hours).padStart(2, '0')}
                  <span className="text-sm font-normal"> Jam </span>
                </>
              )}

              {String(minutes).padStart(2, '0')}
              <span className="text-sm font-normal"> Menit </span>

              {String(seconds).padStart(2, '0')}
              <span className="text-sm font-normal"> Detik</span>
            </span>
          </div>
        </div>

        <span className="w-max h-9 text-sm flex items-center px-4 py-2 bg-primary text-white shadow-sm rounded-md">
          Soal {currentQuestionIndex + 1} dari {questions.length}
        </span>

        {currentQuestion.type === 'CHECKBOX' ? (
          <QuestionCardCheckbox
            question={currentQuestion.title}
            answers={currentQuestion.answers}
            imageUrl={currentQuestion.image}
            imageLabel={currentQuestion.imageLabel}
            selectedAnswers={answers[currentQuestion.id]?.answerIds || []}
            onSelectAnswer={(id) => setAnswer(currentQuestion.id, id, 'CHECKBOX')}
          />
        ) : (
          <QuestionCardRadio
            question={currentQuestion.title}
            answers={currentQuestion.answers}
            imageUrl={currentQuestion.image}
            imageLabel={currentQuestion.imageLabel}
            selectedAnswer={answers[currentQuestion.id]?.answerIds?.[0] || ''}
            onSelectAnswer={(id) => setAnswer(currentQuestion.id, id, 'RADIO')}
          />
        )}

        <div className="w-full flex justify-between gap-2 items-center">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            disabled={isFirst || loading}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <Select
            value={`${currentQuestionIndex}`}
            onValueChange={(value) => setCurrentQuestionIndex(+value)}
          >
            <SelectTrigger className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Soal</SelectLabel>
                {questions.map((question, index) => {
                  const isAnswered = !!answers[question.id] && answers[question.id]?.answerIds.length > 0;

                  return (
                    <SelectItem
                      key={`jump-${index}`}
                      value={`${index}`}
                      disabled={index === currentQuestionIndex}
                      className={cn(isAnswered ? "text-primary focus:text-primary font-medium" : "")}
                    >
                      {index + 1}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>

          {!isLast ? (
            <Button
              className="gap-2"
              onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
              disabled={isLast}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button className="gap-2" onClick={handleSubmit} disabled={loading}>
              {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExamLayout
