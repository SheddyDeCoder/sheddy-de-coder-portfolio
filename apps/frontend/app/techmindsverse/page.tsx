import type { Metadata } from "next";
import {
  TMVHero,
  TMVMission,
  TMVProducts,
  TMVCommunityCTA,
} from "@/components/pages/techmindsverse";

export const metadata: Metadata = {
  title: "TechMindsVerse",
  description:
    "TechMindsVerse — a growing technology ecosystem founded by Shedrack Nliam, combining product development, education, mentorship, and community for founders and builders.",
  alternates: { canonical: "/techmindsverse" },
  openGraph: {
    title: "TechMindsVerse — A Growing Technology Ecosystem",
    description:
      "TechMindsVerse — a growing technology ecosystem founded by Shedrack Nliam, combining product development, education, mentorship, and community for founders and builders.",
  },
};

export default function TechMindsVersePage() {
  return (
    <>
      <TMVHero />
      <TMVMission />
      <TMVProducts />
      <TMVCommunityCTA />
    </>
  );
}