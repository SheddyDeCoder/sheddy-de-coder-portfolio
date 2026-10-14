

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
