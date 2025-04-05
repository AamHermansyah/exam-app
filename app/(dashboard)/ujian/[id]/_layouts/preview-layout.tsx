'use client'

import React, { useState } from 'react'
import QuestionCardCheckbox from '@/components/shared/question-card-checkbox'
import QuestionCardRadio from '@/components/shared/question-card-radio'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Answer = {
  id: string;
  text: string;
};

type Question = {
  type: 'checkbox' | 'radio';
  question: string;
  answers: Answer[];
  correctAnswers: string[];
  selectedAnswers: string[];
};

const questions: Question[] = [
  {
    type: 'checkbox',
    question: "Apa saja warna primer?",
    answers: [
      { id: "merah", text: "Merah" },
      { id: "biru", text: "Biru" },
      { id: "kuning", text: "Kuning" },
      { id: "hijau", text: "Hijau" },
    ],
    correctAnswers: ["merah", "biru", "kuning"],
    selectedAnswers: ["merah", "biru"]
  },
  {
    type: 'radio',
    question: "Siapa presiden pertama Indonesia?",
    answers: [
      { id: "soekarno", text: "Soekarno" },
      { id: "soeharto", text: "Soeharto" },
      { id: "habibie", text: "B.J. Habibie" },
      { id: "gusdur", text: "Abdurrahman Wahid" },
    ],
    correctAnswers: ["soekarno"],
    selectedAnswers: ["soeharto"]
  },
  {
    type: 'radio',
    question: "Planet terdekat dari Matahari adalah?",
    answers: [
      { id: "venus", text: "Venus" },
      { id: "bumi", text: "Bumi" },
      { id: "merkurius", text: "Merkurius" },
      { id: "mars", text: "Mars" },
    ],
    correctAnswers: ["merkurius"],
    selectedAnswers: ["merkurius"],
  },
]

function PreviewLayout() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]

  const isFirst = currentQuestionIndex === 0
  const isLast = currentQuestionIndex === questions.length - 1

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl mx-auto space-y-4">
        <div>
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-medium">Matematika Dasar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-4 p-4 border rounded-lg shadow-sm bg-gray-50">
            <div>
              <p className="text-sm text-muted-foreground">Nama:</p>
              <p className="font-medium">Jhon Doe</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Skor:</p>
              <p className="font-medium">60/100</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Durasi:</p>
              <p className="font-medium">40 menit</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status:</p>
              <p className="font-medium">Lulus</p>
            </div>
          </div>
        </div>

        {/* Info Pertanyaan */}
        <span className="w-max h-9 text-sm flex items-center px-4 py-2 bg-primary text-white shadow-sm rounded-md">
          Soal {currentQuestionIndex + 1} dari {questions.length}
        </span>

        {/* Render Soal Sesuai Tipe */}
        {currentQuestion.type === 'checkbox' ? (
          <QuestionCardCheckbox
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            correctAnswers={currentQuestion.correctAnswers}
            selectedAnswers={currentQuestion.selectedAnswers}
          />
        ) : (
          <QuestionCardRadio
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            correctAnswer={currentQuestion.correctAnswers[0]}
            selectedAnswer={currentQuestion.selectedAnswers[0]}
          />
        )}

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
