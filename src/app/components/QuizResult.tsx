"use client";

import { Archetype, ArchetypeId } from "@/data/archetypes";

interface QuizResultProps {
  archetype: Archetype;
}

// Match icons from QuizIntro
const archetypeIcons: Record<ArchetypeId, React.ReactNode> = {
  "signal-amplifier": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17" strokeLinecap="round" />
    </svg>
  ),
  "comparison-navigator": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="8" cy="12" r="4" />
      <circle cx="16" cy="12" r="4" />
    </svg>
  ),
  "responsibility-carrier": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 4v16M8 8l4-4 4 4M6 12h12M8 16h8" strokeLinecap="round" />
    </svg>
  ),
  "strategic-overthinker": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  "relentless-builder": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M4 20h16M6 16h12M8 12h8M10 8h4M11 4h2" strokeLinecap="round" />
    </svg>
  ),
};

export function QuizResult({ archetype }: QuizResultProps) {
  const shareText = encodeURIComponent(
    `I'm a ${archetype.name} founder. Which founder archetype are you?`
  );
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const shareUrl = `${origin}/result/${archetype.id}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="animate-reveal">
      {/* Header with icon */}
      <div className="flex items-start gap-4 mb-6">
        <div className="text-[var(--accent)] text-glow">
          {archetypeIcons[archetype.id]}
        </div>
        <div>
          <p className="text-[var(--accent)] text-xs font-medium mb-2 uppercase tracking-widest text-glow">
            Your Archetype
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            {archetype.name}
          </h1>
        </div>
      </div>

      <p className="text-xl text-[var(--text-secondary)] mb-10 italic leading-relaxed">
        &ldquo;{archetype.tagline}&rdquo;
      </p>

      <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
        <p>{archetype.description}</p>

        <div className="highlight-box p-5">
          <p className="text-xs text-[var(--text-muted)] mb-2 uppercase tracking-widest">
            Under pressure
          </p>
          <p className="text-[var(--text-primary)] font-medium">
            {archetype.underPressure}
          </p>
        </div>

        <p className="text-[var(--text-muted)] italic border-l-2 border-[var(--accent)] pl-4">
          {archetype.reframeLine}
        </p>
      </div>

      <div className="divider-gradient my-10" />

      <div className="space-y-6">
        <p className="text-[var(--text-secondary)]">
          <span className="text-[var(--accent)] font-medium text-glow">FounderTherapy</span> is building a CBT-based mental fitness tool specifically for startup founders. You&apos;re on the early access list.
        </p>

        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-interactive inline-flex items-center gap-3 px-5 py-3 group"
        >
          <svg className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="relative z-10 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
            Share your archetype
          </span>
        </a>
      </div>

      <div className="mt-10">
        <button
          onClick={() => window.location.reload()}
          className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] text-sm transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Take the quiz again
        </button>
      </div>
    </div>
  );
}
