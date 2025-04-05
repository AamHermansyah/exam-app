'use client'

import React, { useEffect, useState } from 'react'
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
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useExamStore } from '../../_stores/use-exam-store'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const questions = [
  {
    id: 'q-1',
    type: 'checkbox',
    question: "Apa saja warna primer?",
    answers: [
      { id: "merah", text: "Merah" },
      { id: "biru", text: "Biru" },
      { id: "kuning", text: "Kuning" },
      { id: "hijau", text: "Hijau" },
    ],
  },
  {
    id: 'q-2',
    type: 'radio',
    question: "Siapa presiden pertama Indonesia?",
    answers: [
      { id: "soekarno", text: "Soekarno" },
      { id: "soeharto", text: "Soeharto" },
      { id: "habibie", text: "B.J. Habibie" },
      { id: "gusdur", text: "Abdurrahman Wahid" },
    ],
  },
  {
    id: 'q-3',
    type: 'radio',
    question: "Planet terdekat dari Matahari adalah?",
    answers: [
      { id: "venus", text: "Venus" },
      { id: "bumi", text: "Bumi" },
      { id: "merkurius", text: "Merkurius" },
      { id: "mars", text: "Mars" },
    ],
  },
]

function ExamLayout() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]
  const isFirst = currentQuestionIndex === 0
  const isLast = currentQuestionIndex === questions.length - 1
  const navigate = useRouter()

  const {
    answers,
    setAnswer,
    countdown,
    startCountdown,
    tickCountdown,
  } = useExamStore()

  useEffect(() => {
    startCountdown(3600) // contoh: 60 menit
    const timer = setInterval(() => {
      tickCountdown()
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = () => {
    const unanswered = questions.filter(q => !answers[q.id] || answers[q.id].length === 0)
    if (unanswered.length > 0) {
      toast.warning('Semua soal harus dijawab!');
      return
    }
    console.log('Jawaban:', answers);
    navigate.push('/riwayat');
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl mx-auto space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-medium">Matematika Dasar</h2>
          <div className="p-4 text-center border rounded-lg shadow-sm bg-gray-50">
            <h4 className="text-sm">Sisa Waktu</h4>
            <span className="text-2xl font-medium text-destructive">
              {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}
            </span>
          </div>
        </div>

        <span className="w-max h-9 text-sm flex items-center px-4 py-2 bg-primary text-white shadow-sm rounded-md">
          Soal {currentQuestionIndex + 1} dari {questions.length}
        </span>

        {currentQuestion.type === 'checkbox' ? (
          <QuestionCardCheckbox
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            selectedAnswers={answers[currentQuestion.id] || []}
            onSelectAnswer={(id) => setAnswer(currentQuestion.id, id, 'checkbox')}
          />
        ) : (
          <QuestionCardRadio
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            selectedAnswer={answers[currentQuestion.id]?.[0] || ''}
            onSelectAnswer={(id) => setAnswer(currentQuestion.id, id, 'radio')}
          />
        )}

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
                  const isAnswered = !!answers[question.id] && answers[question.id].length > 0;

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
            <Button className="gap-2" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExamLayout
