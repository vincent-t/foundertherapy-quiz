import { NextResponse } from "next/server";
import { db } from "@/db";
import { quizCompletions } from "@/db/schema";
import { count } from "drizzle-orm";

// Cache the count for 5 minutes
let cachedCount: number | null = null;
let cacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function getCompletionCount(): Promise<number> {
  try {
    const [result] = await db.select({ count: count() }).from(quizCompletions);
    return result?.count || 0;
  } catch (error) {
    console.error("Failed to fetch completion count:", error);
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
  const completionCount = await getCompletionCount();
  cachedCount = completionCount;
  cacheTime = now;

  return NextResponse.json({ count: completionCount });
}
