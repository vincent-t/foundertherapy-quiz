import { ArchetypeId } from "@/data/archetypes";

export interface QuizResult {
  primary: ArchetypeId;
  secondary?: ArchetypeId;
}

export function calculateResult(answers: ArchetypeId[]): QuizResult {
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

  // Sort archetypes by count (descending)
  const sorted = (Object.keys(counts) as ArchetypeId[]).sort(
    (a, b) => counts[b] - counts[a]
  );

  const primaryCount = counts[sorted[0]];
  const secondaryCount = counts[sorted[1]];

  // Handle ties for primary - use recency
  const topArchetypes = sorted.filter((key) => counts[key] === primaryCount);
  let primary = topArchetypes[0];

  if (topArchetypes.length > 1) {
    for (let i = answers.length - 1; i >= 0; i--) {
      if (topArchetypes.includes(answers[i])) {
        primary = answers[i];
        break;
      }
    }
  }

  // Secondary only if it has >= 2 votes and is different from primary
  let secondary: ArchetypeId | undefined;
  if (secondaryCount >= 2 && sorted[1] !== primary) {
    secondary = sorted[1];
  } else if (secondaryCount >= 2 && sorted[1] === primary && counts[sorted[2]] >= 2) {
    // If sorted[1] was the primary due to tie, check sorted[2]
    secondary = sorted[2];
  }

  return { primary, secondary };
}
