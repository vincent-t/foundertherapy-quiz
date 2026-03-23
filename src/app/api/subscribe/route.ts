import { NextRequest, NextResponse } from "next/server";
import { addContactToBrevo } from "@/lib/brevo";

export async function POST(request: NextRequest) {
  try {
    const { email, archetype } = await request.json();

    if (!email || !archetype) {
      return NextResponse.json(
        { error: "Email and archetype are required" },
        { status: 400 }
      );
    }

    const result = await addContactToBrevo(email, archetype);

    if (result.success) {
      return NextResponse.json({ success: true });
    }

    // Still return success to user even if Brevo fails
    // (don't block the quiz experience)
    console.error("Brevo error (non-blocking):", result.error);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json({ success: true }); // Non-blocking
  }
}
