/**
 * Brevo Integration for FounderTherapy Quiz
 *
 * Adds contacts to Brevo with their archetype result as an attribute.
 */

const BREVO_API_KEY = process.env.BREVO_API_KEY;

interface BrevoResult {
  success: boolean;
  error?: string;
}

/**
 * Add a contact to Brevo with their quiz result
 */
export async function addContactToBrevo(
  email: string,
  archetype: string
): Promise<BrevoResult> {
  if (!BREVO_API_KEY) {
    console.warn("BREVO_API_KEY not set, skipping contact creation");
    return { success: false, error: "API key not configured" };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          ARCHETYPE: archetype,
          SOURCE: "founder-quiz",
        },
        updateEnabled: true, // Update if contact exists
      }),
    });

    const status = response.status;

    // 201 = created, 204 = updated existing
    if (status === 201 || status === 204) {
      console.log("Contact added to Brevo:", email, archetype);
      return { success: true };
    }

    const errorText = await response.text();
    console.error("Brevo API error:", status, errorText);
    return { success: false, error: errorText };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Brevo request failed:", message);
    return { success: false, error: message };
  }
}
