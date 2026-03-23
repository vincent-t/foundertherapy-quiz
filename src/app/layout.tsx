import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://cbt-exercise.vercel.app"
  ),
  title: "Which Founder Archetype Are You? | FounderTherapy",
  description:
    "Startup pressure creates predictable thinking patterns. Take the 60-second quiz to discover your founder archetype.",
  openGraph: {
    title: "Which Founder Archetype Are You?",
    description:
      "Startup pressure creates predictable thinking patterns. Take the 60-second quiz to discover your founder archetype.",
    type: "website",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Founder Archetype Are You?",
    description:
      "Startup pressure creates predictable thinking patterns. Take the 60-second quiz to discover your founder archetype.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
