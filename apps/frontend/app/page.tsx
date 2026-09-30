import {
  OpeningIntro,
  OpeningScene,
  QuickActionPanel,
} from "@/components/sections/opening-sequence";

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

import {
  LatestUpdatesFeed,
  BlogPreview,
  UpcomingEvents,
  NewsletterSignup,
  SocialConnection,
  FinalCta,
} from "@/components/sections/latest-updates-cta";

export default function HomePage() {
  return (
    <>
      {/* Opening experience */}
      <OpeningIntro />

      {/* Primary positioning / Hero */}
      <OpeningScene />

      {/* Quick access actions */}
      <QuickActionPanel />

      {/* What I believe and how I approach technology */}
      <MissionStatement />
      <FloatingTechCards />

      {/* TechMindsVerse / ecosystem context */}
      <EcosystemPreview />

      {/* Credibility and measurable proof */}
      <SignatureMetrics />

      {/* Selected products and work */}
      <FeaturedProjects />

      {/* Founder context */}
      <AboutPreview />

      {/* How people can work with me */}
      <WorkWithMePreview />

      {/* Trust, experience and credibility */}
      <TrustSocialProof />

      {/* Updates / knowledge / ecosystem activity */}
      <LatestUpdatesFeed />
      <BlogPreview />
      <UpcomingEvents />

      {/* Audience relationship / retention */}
      <NewsletterSignup />
      <SocialConnection />

      {/* Final conversion */}
      <FinalCta />
    </>
  );
}