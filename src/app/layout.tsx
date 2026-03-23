import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Which Founder Archetype Are You? | FounderTherapy",
  description:
    "Startup pressure creates predictable thinking patterns. Take the 60-second quiz to discover your founder archetype.",
  openGraph: {
    title: "Which Founder Archetype Are You?",
    description:
      "Startup pressure creates predictable thinking patterns. Take the 60-second quiz to discover your founder archetype.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Founder Archetype Are You?",
    description:
      "Startup pressure creates predictable thinking patterns. Take the 60-second quiz to discover your founder archetype.",
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
