"use client";

import { Archetype } from "@/data/archetypes";

interface QuizResultProps {
  archetype: Archetype;
}

export function QuizResult({ archetype }: QuizResultProps) {
  const shareText = encodeURIComponent(
    `I'm a ${archetype.name} founder. Which founder archetype are you?`
  );
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const shareUrl = `${origin}/result/${archetype.id}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="animate-fadeIn">
      <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wide">
        Your Archetype
      </p>

      <h1 className="font-serif text-4xl md:text-5xl font-normal mb-3">
        {archetype.name}
      </h1>

      <p className="text-xl text-neutral-400 mb-8 italic">
        {archetype.tagline}
      </p>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p>{archetype.description}</p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
          <p className="text-sm text-neutral-500 mb-2">Under pressure</p>
          <p className="text-white">{archetype.underPressure}</p>
        </div>

        <p className="text-neutral-400 italic">
          {archetype.reframeLine}
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-neutral-800">
        <p className="text-neutral-300 mb-6">
          <span className="text-accent font-medium">FounderTherapy</span> is building a CBT-based mental fitness tool specifically for startup founders. You&apos;re on the early access list.
        </p>

        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg px-5 py-3 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Share your archetype</span>
        </a>
      </div>

      <div className="mt-8">
        <button
          onClick={() => window.location.reload()}
          className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
        >
          ← Take the quiz again
        </button>
      </div>
    </div>
  );
}
