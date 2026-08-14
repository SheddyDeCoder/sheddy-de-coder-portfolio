import { OpeningIntro, OpeningScene, QuickActionPanel } from "@/components/sections/opening-sequence";
import {
  MissionStatement,
  FloatingTechCards,
  EcosystemPreview,
  SignatureMetrics,
} from "@/components/sections/mission";
import { FeaturedProjects } from "@/components/sections/featured-projects";

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
    </>
  );
}