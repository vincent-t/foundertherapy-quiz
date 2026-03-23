import { ArchetypeId } from "@/data/archetypes";

export function calculateResult(answers: ArchetypeId[]): ArchetypeId {
  // Count occurrences of each archetype
  const counts: Record<ArchetypeId, number> = {
    "signal-amplifier": 0,
    "comparison-navigator": 0,
    "responsibility-carrier": 0,
    "strategic-overthinker": 0,
    "relentless-builder": 0,
  };

  answers.forEach((archetype) => {
    counts[archetype]++;
  });

  // Find the max count
  const maxCount = Math.max(...Object.values(counts));

  // Get all archetypes with max count (for tie handling)
  const topArchetypes = (Object.keys(counts) as ArchetypeId[]).filter(
    (key) => counts[key] === maxCount
  );

  // If tie, return the one that was selected most recently (last in answers array)
  if (topArchetypes.length > 1) {
    for (let i = answers.length - 1; i >= 0; i--) {
      if (topArchetypes.includes(answers[i])) {
        return answers[i];
      }
    }
  }

  return topArchetypes[0];
}
