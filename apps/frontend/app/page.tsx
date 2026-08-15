import { OpeningIntro, OpeningScene, QuickActionPanel } from "@/components/sections/opening-sequence";
import {
  MissionStatement,
  FloatingTechCards,
  EcosystemPreview,
  SignatureMetrics,
} from "@/components/sections/mission";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AboutPreview } from "@/components/sections/about-preview";

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
    </>
  );
}