"use client";

import { archetypeList } from "@/data/archetypes";

interface QuizIntroProps {
  onStart: () => void;
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="animate-fadeIn">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
        Which Founder Archetype Are You?
      </h1>
      <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-lg">
        Startup pressure creates predictable thinking patterns. Discover yours in 60 seconds.
      </p>
      <button
        onClick={onStart}
        className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-lg text-lg transition-colors"
      >
        Take the Quiz
      </button>

      <div className="mt-16 pt-8 border-t border-neutral-800">
        <p className="text-sm text-neutral-500 mb-6">The 5 Archetypes</p>
        <div className="grid gap-3">
          {archetypeList.map((archetype) => (
            <div
              key={archetype.id}
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3"
            >
              <span className="text-neutral-300">{archetype.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
