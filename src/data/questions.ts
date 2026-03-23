import { ArchetypeId } from "./archetypes";

export interface Answer {
  text: string;
  archetype: ArchetypeId;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "On a Sunday evening before a big week:",
    answers: [
      { text: "I can't stop thinking about everything that could go wrong.", archetype: "signal-amplifier" },
      { text: "I checked Twitter and everyone seems to be doing better.", archetype: "comparison-navigator" },
      { text: "My team needs me to have answers by Monday.", archetype: "responsibility-carrier" },
      { text: "I'm mentally running through every possible scenario.", archetype: "strategic-overthinker" },
      { text: "I'm already working. Rest can wait.", archetype: "relentless-builder" },
    ],
  },
  {
    id: 2,
    text: "When growth slows for a few weeks:",
    answers: [
      { text: "The company might be in serious trouble.", archetype: "signal-amplifier" },
      { text: "Other startups seem to be growing faster.", archetype: "comparison-navigator" },
      { text: "I'm letting my investors and team down.", archetype: "responsibility-carrier" },
      { text: "I need to figure out exactly what changed before doing anything.", archetype: "strategic-overthinker" },
      { text: "I just need to work harder and push through this.", archetype: "relentless-builder" },
    ],
  },
  {
    id: 3,
    text: "After an investor says no:",
    answers: [
      { text: "Maybe nobody will fund us. This could be the end.", archetype: "signal-amplifier" },
      { text: "Other founders seem to raise so easily.", archetype: "comparison-navigator" },
      { text: "I've wasted my team's time.", archetype: "responsibility-carrier" },
      { text: "I need to rethink the entire pitch and strategy.", archetype: "strategic-overthinker" },
      { text: "I'll just do more pitches. Volume will fix this.", archetype: "relentless-builder" },
    ],
  },
  {
    id: 4,
    text: "When a competitor raises a large funding round:",
    answers: [
      { text: "We're falling behind. This might kill our chances.", archetype: "signal-amplifier" },
      { text: "Why are they ahead? What am I doing wrong?", archetype: "comparison-navigator" },
      { text: "My team is counting on me to respond to this.", archetype: "responsibility-carrier" },
      { text: "I need to re-analyze our entire strategy.", archetype: "strategic-overthinker" },
      { text: "Time to double down and outwork them.", archetype: "relentless-builder" },
    ],
  },
  {
    id: 5,
    text: "When you finally hit a major milestone:",
    answers: [
      { text: "I'm already worried about what could go wrong next.", archetype: "signal-amplifier" },
      { text: "Others have hit bigger milestones faster.", archetype: "comparison-navigator" },
      { text: "I hope my team feels recognized for their work.", archetype: "responsibility-carrier" },
      { text: "I need to understand exactly why this worked.", archetype: "strategic-overthinker" },
      { text: "Great. What's the next goal?", archetype: "relentless-builder" },
    ],
  },
];
