import type { Metadata } from "next";
import {
  AboutHero,
  JourneyTimeline,
  LeadershipHighlights,
  ValuesAndCapabilities,
  AboutCTA,
} from "@/components/pages/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shedrack Nliam — Technology Founder & Product Builder, founder of TechMindsVerse.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <JourneyTimeline />
      <LeadershipHighlights />
      <ValuesAndCapabilities />
      <AboutCTA />
    </>
  );
}