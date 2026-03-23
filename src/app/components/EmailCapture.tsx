"use client";

import { useState } from "react";

interface EmailCaptureProps {
  archetype: string;
  onSubmit: (email: string) => void;
  onSkip: () => void;
}

export function EmailCapture({ archetype, onSubmit, onSkip }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, archetype }),
        });
      } catch (error) {
        console.error("Webhook error:", error);
      }
    }

    setIsSubmitting(false);
    onSubmit(email);
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4">
        Your result is ready.
      </h2>
      <p className="text-lg text-neutral-400 mb-8">
        Enter your email to see your Founder Archetype — plus get early access to FounderTherapy when we launch.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full bg-neutral-900 border border-neutral-700 focus:border-accent rounded-lg px-5 py-4 text-white placeholder-neutral-500 outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-medium px-8 py-4 rounded-lg text-lg transition-colors"
        >
          {isSubmitting ? "..." : "See My Result"}
        </button>
      </form>

      <p className="text-sm text-neutral-500 mt-4">
        No spam. Unsubscribe anytime.
      </p>

      {!process.env.NEXT_PUBLIC_WEBHOOK_URL && (
        <button
          onClick={onSkip}
          className="mt-6 text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
        >
          Skip for now →
        </button>
      )}
    </div>
  );
}
