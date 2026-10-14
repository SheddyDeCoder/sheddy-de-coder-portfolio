
import { TRUST_INTRO } from "./trust-social-proof.constants";
import { TrustIndicators } from "./TrustIndicators";
import { RecommendationsList } from "./RecommendationsList";
import { LogoShowcase } from "./LogoShowcase";

export function TrustSocialProof() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="mx-auto max-w-6xl px-6 py-14 md:py-20"
    >
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Experience & Credibility
        </p>

        <h2
          id="trust-heading"
          className="font-display text-3xl font-bold text-text-primary md:text-4xl"
        >
          {TRUST_INTRO.heading}
        </h2>

        <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">
          {TRUST_INTRO.body}
        </p>
      </div>

      <TrustIndicators />

      <div className="mt-8 space-y-8">
        <RecommendationsList />
        <LogoShowcase />
      </div>
    </section>
  );
}
