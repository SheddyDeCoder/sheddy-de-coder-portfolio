import type { Metadata } from "next";
import {
  AboutHero,
  JourneyTimeline,
  LeadershipHighlights,
  ProfessionalExperience,
  ValuesAndCapabilities,
  CareerHighlights,
  AboutCTA,
} from "@/components/pages/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shedrack Nliam (Sheddy De Coder) — Technology Founder and Product Builder. From social media management and digital design to full-stack software development, founding TechMindsVerse, and building fintech, product, and media solutions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Shedrack Nliam — Sheddy De Coder",
    description:
      "Technology Founder, Product Builder, and Digital Strategist. Founder of TechMindsVerse.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <JourneyTimeline />
      <LeadershipHighlights />
      <ProfessionalExperience />
      <ValuesAndCapabilities />
      <CareerHighlights />
      <AboutCTA />
    </>
  );
}