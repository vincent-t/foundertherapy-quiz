import { NextResponse } from "next/server";

// Cache the count for 5 minutes to avoid hitting Brevo too often
let cachedCount: number | null = null;
let cacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function getBrevoContactCount(): Promise<number> {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return 0;
  }

  try {
    // Fetch contacts with SOURCE=founder-quiz attribute
    const response = await fetch(
      "https://api.brevo.com/v3/contacts?limit=1&segmentId=0&modifiedSince=2020-01-01",
      {
        headers: {
          accept: "application/json",
          "api-key": apiKey,
        },
      }
    );

    if (!response.ok) {
      console.error("Brevo API error:", response.status);
      return 0;
    }

    const data = await response.json();

    // The count is in the response - filter by our source
    // For now, return total contacts (we can refine with segments later)
    return data.count || 0;
  } catch (error) {
    console.error("Failed to fetch Brevo count:", error);
    return 0;
  }
}

export async function GET() {
  const now = Date.now();

  // Return cached count if still valid
  if (cachedCount !== null && now - cacheTime < CACHE_DURATION) {
    return NextResponse.json({ count: cachedCount });
  }

  // Fetch fresh count
  const count = await getBrevoContactCount();
  cachedCount = count;
  cacheTime = now;

  return NextResponse.json({ count });
}
