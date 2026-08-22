import { TRUST_INTRO } from "./trust-social-proof.constants";
import { TrustIndicators } from "./TrustIndicators";
import { RecommendationsList } from "./RecommendationsList";
import { RecommendationForm } from "./RecommendationForm";
import { CommunityImpact } from "./CommunityImpact";
import { SpeakingHighlights } from "./SpeakingHighlights";
import { TechMindsVersePreview } from "./TechMindsVersePreview";
import { LogoShowcase } from "./LogoShowcase";

export function TrustSocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-display text-2xl font-bold text-text-primary md:text-4xl">
          {TRUST_INTRO.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl font-body text-text-secondary">
          {TRUST_INTRO.body}
        </p>
      </div>

      <TrustIndicators />

      <div className="mt-16">
        <RecommendationsList />
      </div>

      <div className="mt-16">
        <RecommendationForm />
      </div>

      <div className="mt-20">
        <CommunityImpact />
      </div>

      <div className="mt-16">
        <SpeakingHighlights />
      </div>

      <div className="mt-16">
        <TechMindsVersePreview />
      </div>

      <div className="mt-16">
        <LogoShowcase />
      </div>
    </section>
  );
}