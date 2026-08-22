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
    "A growing technology community dedicated to learning, collaboration, innovation, and building meaningful digital solutions.",
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