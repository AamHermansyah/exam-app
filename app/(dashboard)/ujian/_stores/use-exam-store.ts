import { create } from 'zustand'

type AnswerType = 'RADIO' | 'CHECKBOX'

type ExamState = {
  answers: {
    [questionId: string]: {
      type: AnswerType
      answerIds: string[]
    }
  }
  setAnswer: (questionId: string, answerId: string, type: AnswerType) => void
  resetAnswers: () => void
  countdown: number
  startCountdown: (seconds: number) => void
  tickCountdown: () => void
  resetCountdown: () => void
}

export const useExamStore = create<ExamState>((set) => ({
  answers: {},
  setAnswer: (questionId, answerId, type) => set((state) => {
    const current = state.answers[questionId]?.answerIds || []
    let updatedAnswers

    if (type === 'RADIO') {
      updatedAnswers = [answerId]
    } else {
      updatedAnswers = current.includes(answerId)
        ? current.filter((a) => a !== answerId)
        : [...current, answerId]
    }

    return {
      answers: {
        ...state.answers,
        [questionId]: {
          type,
          answerIds: updatedAnswers,
        },
      },
    }
  }),
  resetAnswers: () => set(() => ({ answers: {} })),
  countdown: 0,
  resetCountdown: () => set(() => ({ countdown: 0 })),
  startCountdown: (seconds) => set(() => ({ countdown: seconds })),
  tickCountdown: () => set((state) => ({
    countdown: Math.max(state.countdown - 1, 0),
  })),
}))
