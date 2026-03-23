"use client";

import { archetypeList, ArchetypeId } from "@/data/archetypes";

interface QuizIntroProps {
  onStart: () => void;
}

// Abstract geometric icons representing each archetype's thinking pattern
const archetypeIcons: Record<ArchetypeId, React.ReactNode> = {
  "signal-amplifier": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17" strokeLinecap="round" />
    </svg>
  ),
  "comparison-navigator": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="8" cy="12" r="4" />
      <circle cx="16" cy="12" r="4" />
    </svg>
  ),
  "responsibility-carrier": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 4v16M8 8l4-4 4 4M6 12h12M8 16h8" strokeLinecap="round" />
    </svg>
  ),
  "strategic-overthinker": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  "relentless-builder": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M4 20h16M6 16h12M8 12h8M10 8h4M11 4h2" strokeLinecap="round" />
    </svg>
  ),
};

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="animate-fadeIn">
      {/* Hero section */}
      <div className="mb-12">
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
          Take the Quiz
        </button>
      </div>

      {/* Archetype preview */}
      <div className="divider-gradient mb-8" />

      <div>
        <p className="text-xs text-[var(--text-muted)] mb-5 uppercase tracking-widest">
          The 5 Archetypes
        </p>
        <div className="stagger-children grid gap-2">
          {archetypeList.map((archetype) => (
            <div
              key={archetype.id}
              className="card group flex items-center gap-4 px-4 py-3"
            >
              <div className="text-[var(--accent)] opacity-40 group-hover:opacity-70 transition-opacity">
                {archetypeIcons[archetype.id]}
              </div>
              <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                {archetype.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
