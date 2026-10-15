
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/seo/site-config";
import {
  OpeningIntro,
  OpeningScene,
  QuickActionPanel,
} from "@/components/sections/opening-sequence";

import {
  MissionStatement,
  FloatingTechCards,
  EcosystemPreview,
} from "@/components/sections/mission";

import { BuildGrowAutomate } from "@/components/sections/build-grow-automate/BuildGrowAutomate";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AboutPreview } from "@/components/sections/about-preview";
import { WorkWithMePreview } from "@/components/sections/work-with-me";
import { TrustSocialProof } from "@/components/sections/trust-social-proof";

import {
  SocialConnection,
  FinalCta,
} from "@/components/sections/latest-updates-cta";



export const metadata: Metadata = {
  title: {
    absolute:
      "Shedrack Nliam (Sheddy De Coder) | Digital Solutions Strategist",
  },

  description:
    "Shedrack Nliam (Sheddy De Coder) helps founders, executives, and businesses build websites and digital solutions, improve SEO and online visibility, and simplify workflows through automation.",

  alternates: {
    canonical: SITE_CONFIG.url,
  },

  openGraph: {
    title:
      "Shedrack Nliam (Sheddy De Coder) | Digital Solutions Strategist",
    description:
      "Helping founders and businesses build digital solutions, grow their online visibility, and automate workflows.",
    url: SITE_CONFIG.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Identity */}
      <OpeningIntro />
      <OpeningScene />
      <QuickActionPanel />

      {/* Core capabilities */}
      <BuildGrowAutomate />

      {/* Proof and credibility */}
      <FeaturedProjects />
      <TrustSocialProof />

      {/* Mission and founder identity */}
      <MissionStatement />
      <FloatingTechCards />
      <AboutPreview />
      <EcosystemPreview />

      {/* Collaboration */}
      <WorkWithMePreview />

      {/* Connection and final conversion */}
      <SocialConnection />
      <FinalCta />
    </>
  );
}
