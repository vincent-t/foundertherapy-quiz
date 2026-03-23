import { NextResponse } from "next/server";
import { db } from "@/db";
import { quizCompletions } from "@/db/schema";
import { eq } from "drizzle-orm";

interface LogCompletionRequest {
  answers?: string[];
  primary?: string;
  secondary?: string;
  email?: string;
  completionId?: string;
}

export async function POST(request: Request) {
  try {
    const body: LogCompletionRequest = await request.json();
    const { answers, primary, secondary, email, completionId } = body;

    // Update existing record with email
    if (completionId && email) {
      await db
        .update(quizCompletions)
        .set({ email })
        .where(eq(quizCompletions.completionId, completionId));

      return NextResponse.json({ success: true, completionId });
    }

    // Create new record
    if (answers && primary) {
      const [result] = await db
        .insert(quizCompletions)
        .values({
          answers,
          primaryArchetype: primary,
          secondaryArchetype: secondary || null,
        })
        .returning({ completionId: quizCompletions.completionId });

      return NextResponse.json({ success: true, completionId: result.completionId });
    }

    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  } catch (error) {
    console.error("Log completion error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
