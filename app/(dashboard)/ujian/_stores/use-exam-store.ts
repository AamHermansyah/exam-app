import { create } from 'zustand'

type ExamState = {
  answers: { [questionId: string]: string[] }
  setAnswer: (questionId: string, answerId: string, type: 'radio' | 'checkbox') => void

  countdown: number
  startCountdown: (seconds: number) => void
  tickCountdown: () => void
}

export const useExamStore = create<ExamState>((set) => ({
  answers: {},
  setAnswer: (questionId, answerId, type) => set((state) => {
    const current = state.answers[questionId] || []
    if (type === 'radio') {
      return { answers: { ...state.answers, [questionId]: [answerId] } }
    } else {
      const updated = current.includes(answerId)
        ? current.filter(a => a !== answerId)
        : [...current, answerId]
      return { answers: { ...state.answers, [questionId]: updated } }
    }
  }),

  countdown: 0,
  startCountdown: (seconds) => set(() => ({ countdown: seconds })),
  tickCountdown: () => set((state) => ({
    countdown: Math.max(state.countdown - 1, 0),
  })),
}))
