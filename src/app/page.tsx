"use client";

import { useState } from "react";
import { QuizIntro } from "./components/QuizIntro";
import { QuizQuestion } from "./components/QuizQuestion";
import { EmailCapture } from "./components/EmailCapture";
import { QuizResult } from "./components/QuizResult";
import { questions } from "@/data/questions";
import { archetypes, ArchetypeId } from "@/data/archetypes";
import { calculateResult, QuizResult as QuizResultType } from "@/lib/scoring";

type Screen = "intro" | "question" | "email" | "result";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ArchetypeId[]>([]);
  const [result, setResult] = useState<QuizResultType | null>(null);
  const [completionId, setCompletionId] = useState<string | null>(null);

  const handleStart = () => {
    setScreen("question");
  };

  const handleAnswer = (answerIndex: number) => {
    const selectedArchetype = questions[questionIndex].answers[answerIndex].archetype;
    const newAnswers = [...answers, selectedArchetype];
    setAnswers(newAnswers);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      const calculatedResult = calculateResult(newAnswers);
      setResult(calculatedResult);
      setScreen("email");
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      setScreen("intro");
    }
  };

  const handleCompletionLogged = (id: string) => {
    setCompletionId(id);
  };

  const handleEmailSubmit = () => {
    setScreen("result");
  };

  const handleSkipEmail = () => {
    setScreen("result");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl">
        {screen === "intro" && <QuizIntro onStart={handleStart} />}

        {screen === "question" && (
          <QuizQuestion
            question={questions[questionIndex]}
            currentIndex={questionIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            onBack={handleBack}
            canGoBack={true}
          />
        )}

        {screen === "email" && result && (
          <EmailCapture
            archetype={result.primary}
            secondary={result.secondary}
            answers={answers}
            completionId={completionId}
            onCompletionLogged={handleCompletionLogged}
            onSubmit={handleEmailSubmit}
            onSkip={handleSkipEmail}
          />
        )}

        {screen === "result" && result && (
          <QuizResult
            archetype={archetypes[result.primary]}
            secondaryArchetype={result.secondary ? archetypes[result.secondary] : undefined}
          />
        )}
      </div>
    </main>
  );
}
