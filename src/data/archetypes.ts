export type ArchetypeId =
  | "signal-amplifier"
  | "comparison-navigator"
  | "responsibility-carrier"
  | "strategic-overthinker"
  | "relentless-builder";

export interface Archetype {
  id: ArchetypeId;
  name: string;
  tagline: string;
  description: string;
  underPressure: string;
  distortion: string;
  reframeLine: string;
}

export const archetypes: Record<ArchetypeId, Archetype> = {
  "signal-amplifier": {
    id: "signal-amplifier",
    name: "The Signal Amplifier",
    tagline: "You detect every risk — sometimes too loudly.",
    description:
      "You're highly attuned to signals in the startup environment. A slight dip in metrics, a competitor's move, a slow week — you notice it all. This sensitivity is a genuine strength: it makes you a vigilant founder who catches problems early. But under pressure, small signals get amplified into existential threats. A 5% churn increase becomes \"the company is dying.\" A single investor rejection becomes \"nobody will ever fund us.\"",
    underPressure: "You catastrophize. Worst-case scenarios feel like certainties.",
    distortion: "Catastrophizing / Future-tripping",
    reframeLine:
      "In psychology, this pattern is called catastrophizing — assuming the worst outcome is the most likely one. The good news? It's one of the most responsive patterns to reframing.",
  },
  "comparison-navigator": {
    id: "comparison-navigator",
    name: "The Comparison Navigator",
    tagline: "You always know where you stand — relative to everyone else.",
    description:
      "You have an impressive awareness of the startup landscape. You track who's raising, who's shipping, who's growing. This market awareness is valuable — it keeps you informed and competitive. But under pressure, awareness turns into comparison. Every funding announcement feels like proof you're behind. Every success story makes your progress feel inadequate. You're not measuring yourself against your own milestones — you're measuring against a highlight reel.",
    underPressure: "You compare. Everyone else seems to be winning.",
    distortion: "Comparison bias / Selective evidence",
    reframeLine:
      "In psychology, this pattern is called comparison bias — evaluating yourself against selectively visible successes while ignoring the full picture. It's extremely common and very fixable.",
  },
  "responsibility-carrier": {
    id: "responsibility-carrier",
    name: "The Responsibility Carrier",
    tagline: "You carry the weight so others don't have to.",
    description:
      "You feel deeply responsible for everyone who depends on your startup — your team, your investors, your customers. This sense of duty makes you a loyal, committed leader. But under pressure, responsibility becomes over-responsibility. Every setback feels like a personal failure. Layoffs feel like betrayals. You absorb blame for things outside your control because you believe the buck stops with you — for everything.",
    underPressure: "You internalize. Every problem is your fault.",
    distortion: "Personalization / Over-responsibility",
    reframeLine:
      "In psychology, this pattern is called personalization — taking excessive responsibility for outcomes influenced by many factors. It's the shadow side of strong leadership, and it can be rebalanced.",
  },
  "strategic-overthinker": {
    id: "strategic-overthinker",
    name: "The Strategic Overthinker",
    tagline: "You see every angle — and get stuck between them.",
    description:
      "You think deeply about decisions. You consider second-order effects, map out scenarios, and weigh options carefully. This analytical depth is a real asset — it prevents rash decisions and produces thoughtful strategy. But under pressure, analysis becomes paralysis. You replay decisions endlessly. You research one more thing before committing. You rewrite the strategy instead of executing it. The loop feels productive, but it's actually a way to avoid the discomfort of uncertainty.",
    underPressure: "You loop. Thinking replaces doing.",
    distortion: "Emotional reasoning / Analysis paralysis",
    reframeLine:
      "In psychology, this pattern involves emotional reasoning — where the feeling that you haven't analyzed enough becomes a substitute for action. Recognizing the loop is the first step to breaking it.",
  },
  "relentless-builder": {
    id: "relentless-builder",
    name: "The Relentless Builder",
    tagline: "When in doubt, you work harder.",
    description:
      "Your instinct under pressure is to push through. More hours, more output, more hustle. This resilience and work ethic are genuinely powerful — they've gotten you further than most people. But under pressure, \"work harder\" becomes the only response. You don't pause to ask whether you're working on the right thing. Rest feels like quitting. Stepping back feels like giving up. You mistake motion for progress and burnout for dedication.",
    underPressure: "You grind. Rest feels like failure.",
    distortion: "Control fallacy / Burnout loops",
    reframeLine:
      "In psychology, this pattern relates to the control fallacy — the belief that more effort always equals more control over outcomes. Sustainable performance requires strategic rest, not just relentless output.",
  },
};

export const archetypeList = Object.values(archetypes);
