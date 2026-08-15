import { OpeningIntro, OpeningScene, QuickActionPanel } from "@/components/sections/opening-sequence";
import {
  MissionStatement,
  FloatingTechCards,
  EcosystemPreview,
  SignatureMetrics,
} from "@/components/sections/mission";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AboutPreview } from "@/components/sections/about-preview";
import { WorkWithMePreview } from "@/components/sections/work-with-me";
import { TrustSocialProof } from "@/components/sections/trust-social-proof";

export default function HomePage() {
  return (
    <>
      <OpeningIntro />
      <OpeningScene />
      <QuickActionPanel />
      <MissionStatement />
      <FloatingTechCards />
      <EcosystemPreview />
      <SignatureMetrics />
      <FeaturedProjects />
      <AboutPreview />
      <WorkWithMePreview />
      <TrustSocialProof />
    </>
  );
}