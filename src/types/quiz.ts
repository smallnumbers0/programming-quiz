export interface QuizQuestion {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  answer: 'a' | 'b' | 'c' | 'd';
  correctExplanation: string;
  incorrectExplanation: string;
}

export interface QuizState {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  selectedAnswers: string[];
  isComplete: boolean;
}
