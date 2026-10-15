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
    "Discover TechMindsVerse, a technology ecosystem founded by Shedrack Nliam to help startup founders and builders learn, collaborate, develop digital products, and create meaningful technology.",

  alternates: {
    canonical: "/techmindsverse",
  },

  openGraph: {
    title: "TechMindsVerse | Founded by Shedrack Nliam",
    description:
      "A growing technology ecosystem connecting founders, builders, education, community, and product innovation.",
    url: "/techmindsverse",
    type: "website",
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