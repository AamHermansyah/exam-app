export interface Submission {
  id: string;
  examId: string;
  userId: string;
  submittedAt: string;
  expireAt: string;
  score: number;
  correct: number;
  incorrect: number;
  passed: boolean;
  updatedAt: string;
  user: User;
  answers: Answer[];
  exam: {
    title: string;
  }
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  institution: string;
  class: string;
}

export interface Answer {
  id: string;
  submissionId: string;
  questionId: string;
  selectedAnswerIds: string; // this is a stringified array
  score: number;
  question: Question;
}

export interface Question {
  id: string;
  title: string;
  image: string;
  imageLabel: string;
  type: "RADIO" | "CHECKBOX";
  examId: string;
  createdAt: string;
  correctAnswerIndex: number | null;
}
