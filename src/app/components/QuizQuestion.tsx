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

      <h2 className="font-serif text-2xl md:text-3xl font-normal mb-8 leading-relaxed">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left bg-neutral-900 border border-neutral-800 hover:border-accent hover:bg-neutral-800 rounded-lg px-5 py-4 transition-colors"
          >
            <span className="text-neutral-300">{answer.text}</span>
          </button>
        ))}
      </div>

      {canGoBack && (
        <button
          onClick={onBack}
          className="mt-8 text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
