import type { QuizQuestion } from '../types/quiz';

export function getAnswerText(question: QuizQuestion, option: string): string {
  switch(option) {
    case 'a': return question.a;
    case 'b': return question.b;
    case 'c': return question.c;
    case 'd': return question.d;
    default: return '';
  }
}

export function formatClassName(className: string): string {
  return className.replace('-', ' ').toUpperCase();
}

export function updateButtonState(
  button: HTMLButtonElement, 
  text: string, 
  color: string, 
  disabled: boolean = false
) {
  button.textContent = text;
  button.style.background = color;
  button.disabled = disabled;
}

export function calculateWrongAnswers(score: number, totalQuestions: number): number {
  return totalQuestions - score;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function loadQuizQuestions(className: string): Promise<QuizQuestion[]> {
  try {
    const response = await fetch(`/data/${className}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load ${className} questions`);
    }
    const questions: QuizQuestion[] = await response.json();
    const shuffledQuestions = shuffleArray(questions);
    return shuffledQuestions.slice(0, 20); // Return only first 20 random questions
  } catch (error) {
    console.error('Error loading quiz questions:', error);
    alert('Failed to load quiz questions. Please try again.');
    return [];
  }
}
