"use client";

import { useState } from "react";
import { archetypes, ArchetypeId } from "@/data/archetypes";

interface EmailCaptureProps {
  archetype: string;
  onSubmit: (email: string) => void;
  onSkip: () => void;
}

export function EmailCapture({ archetype, onSubmit, onSkip }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get archetype name for teaser
  const archetypeData = archetypes[archetype as ArchetypeId];
  const archetypeName = archetypeData?.name || "Your Archetype";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, archetype }),
      });
    } catch (error) {
      console.error("Subscribe error:", error);
    }

    setIsSubmitting(false);
    onSubmit(email);
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
      </div>

      <h2 className="font-serif text-3xl md:text-4xl font-normal mb-2 text-[var(--text-primary)]">
        You&apos;re {archetypeName.startsWith("The ") ? "" : "a "}
        <span className="text-[var(--accent)]">{archetypeName}</span>
      </h2>
      <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
        Enter your email to see what this means and get early access to FounderTherapy when we launch.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="input-styled w-full"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing
            </span>
          ) : (
            "See What This Means"
          )}
        </button>
      </form>

      <p className="text-xs text-[var(--text-muted)] mt-4 uppercase tracking-wider">
        No spam. Unsubscribe anytime.
      </p>

      <button
        onClick={onSkip}
        className="mt-8 text-[var(--text-muted)] hover:text-[var(--text-secondary)] text-sm transition-colors flex items-center gap-2"
      >
        Skip for now
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
