import { OpeningIntro, OpeningScene } from "@/components/sections/opening-sequence";
import {
  MissionStatement,
  FloatingTechCards,
  EcosystemPreview,
  SignatureMetrics,
} from "@/components/sections/mission";

export default function HomePage() {
  return (
    <>
      <OpeningIntro />
      <OpeningScene />
      <MissionStatement />
      <FloatingTechCards />
      <EcosystemPreview />
      <SignatureMetrics />
    </>
  );
}