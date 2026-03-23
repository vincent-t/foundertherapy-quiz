import { Metadata } from "next";
import { redirect } from "next/navigation";
import { archetypes, ArchetypeId } from "@/data/archetypes";

interface Props {
  params: Promise<{ archetype: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { archetype: archetypeId } = await params;
  const archetype = archetypes[archetypeId as ArchetypeId];

  if (!archetype) {
    return {
      title: "Which Founder Archetype Are You? | FounderTherapy",
    };
  }

  const title = `${archetype.name} | FounderTherapy`;
  const description = archetype.tagline;
  const ogImageUrl = `/api/og?archetype=${archetypeId}`;

  return {
    title,
    description,
    openGraph: {
      title: archetype.name,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: archetype.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: archetype.name,
      description,
      images: [ogImageUrl],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(archetypes).map((archetype) => ({
    archetype,
  }));
}

export default async function ResultPage({ params }: Props) {
  const { archetype } = await params;
  redirect(`/?result=${archetype}`);
}
