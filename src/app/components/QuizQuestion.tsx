"use client";

import { Question } from "@/data/questions";
import { ProgressBar } from "./ProgressBar";

interface QuizQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onBack,
  canGoBack,
}: QuizQuestionProps) {
  return (
    <div className="animate-fadeIn">
      <ProgressBar current={currentIndex + 1} total={totalQuestions} />

      <h2 className="font-serif text-2xl md:text-3xl font-normal mb-10 leading-relaxed text-[var(--text-primary)]">
        {question.text}
      </h2>

      <div className="stagger-children space-y-3">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="card-interactive w-full text-left px-5 py-4 group"
          >
            <span className="relative z-10 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              {answer.text}
            </span>
          </button>
        ))}
      </div>

      {canGoBack && (
        <button
          onClick={onBack}
          className="mt-10 text-[var(--text-muted)] hover:text-[var(--text-secondary)] text-sm transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      )}
    </div>
  );
}
