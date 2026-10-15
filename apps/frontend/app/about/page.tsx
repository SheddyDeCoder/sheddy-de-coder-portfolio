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
  title: "About Shedrack Nliam",
  description:
    "Discover the story of Shedrack Nliam (Sheddy De Coder), a technology founder and digital solutions strategist. Explore his journey through technology, entrepreneurship, digital media, leadership, and founding TechMindsVerse.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Shedrack Nliam | Sheddy De Coder",
    description:
      "The story, experience, and vision behind Sheddy De Coder — technology founder and digital solutions strategist.",
    url: "/about",
    type: "website",
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