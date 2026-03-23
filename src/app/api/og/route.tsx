import { ImageResponse } from "next/og";
import { archetypes, ArchetypeId } from "@/data/archetypes";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const archetypeId = searchParams.get("archetype") as ArchetypeId | null;

  const archetype = archetypeId ? archetypes[archetypeId] : null;

  const name = archetype?.name ?? "Which Founder Archetype Are You?";
  const rawTagline = archetype?.tagline ?? "Discover your thinking pattern in 60 seconds";
  const tagline = rawTagline.replace(/—/g, "-");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {archetype && (
            <div
              style={{
                color: "#3b82f6",
                fontSize: 24,
                fontWeight: 500,
                marginBottom: 20,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Your Archetype
            </div>
          )}
          <div
            style={{
              color: "#fafafa",
              fontSize: archetype ? 72 : 56,
              fontWeight: 400,
              marginBottom: 24,
              fontFamily: "serif",
            }}
          >
            {name}
          </div>
          <div
            style={{
              color: "#a3a3a3",
              fontSize: 32,
              fontStyle: "italic",
              maxWidth: "80%",
            }}
          >
            {tagline}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            color: "#525252",
            fontSize: 24,
          }}
        >
          FounderTherapy
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
