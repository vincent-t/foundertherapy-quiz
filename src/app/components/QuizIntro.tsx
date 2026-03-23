"use client";

import { useEffect, useState } from "react";

interface QuizIntroProps {
  onStart: () => void;
}

const SOCIAL_PROOF_THRESHOLD = 100;

export function QuizIntro({ onStart }: QuizIntroProps) {
  const [quizCount, setQuizCount] = useState<number>(0);

  useEffect(() => {
    // Fetch quiz count from API
    fetch("/api/quiz-count")
      .then((res) => res.json())
      .then((data) => setQuizCount(data.count || 0))
      .catch(() => setQuizCount(0));
  }, []);

  // Only show when count >= threshold
  const showSocialProof = quizCount >= SOCIAL_PROOF_THRESHOLD;
  // Round down to nearest 50 for display
  const displayCount = Math.floor(quizCount / 50) * 50;

  return (
    <div className="animate-fadeIn">
      {/* Social proof - only shows when >= 100 */}
      {showSocialProof && (
        <p className="text-[var(--text-muted)] text-sm mb-6 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          {displayCount}+ founders have taken this quiz
        </p>
      )}

      {/* Hero section */}
      <p className="text-[var(--accent)] text-sm font-medium mb-4 uppercase tracking-widest text-glow">
        60-Second Assessment
      </p>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-[1.1] tracking-tight">
        Which Founder
        <br />
        <span className="text-[var(--text-secondary)]">Archetype</span> Are You?
      </h1>
      <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-lg leading-relaxed">
        Startup pressure creates predictable thinking patterns.
        Discover yours and learn how to reframe it.
      </p>
      <button onClick={onStart} className="btn-primary">
        Discover My Archetype
      </button>
    </div>
  );
}
