import { SERVICES } from "./work-with-me.constants";
import { ServiceCard } from "./ServiceCard";
import { FeaturedService } from "./FeaturedService";
import { SpeakingPreview } from "./SpeakingPreview";
import { MentorshipPreview } from "./MentorshipPreview";
import { PricingPreview } from "./PricingPreview";
import { WhyWorkWithMe } from "./WhyWorkWithMe";
import { WORK_WITH_ME_INTRO } from "./work-with-me.constants";

export function WorkWithMePreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-2xl font-bold text-text-primary md:text-4xl">
          {WORK_WITH_ME_INTRO.heading}
        </h2>
        <p className="mt-4 font-body text-text-secondary">
          {WORK_WITH_ME_INTRO.body}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <FeaturedService />
        {SERVICES.filter((s) => s !== "Startup Product Development").map(
          (title) => (
            <ServiceCard key={title} title={title} />
          )
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <SpeakingPreview />
        <MentorshipPreview />
        <PricingPreview />
      </div>

      <div className="mt-16">
        <h3 className="mb-6 font-display text-lg font-semibold text-text-primary">
          Why Work With Me
        </h3>
        <WhyWorkWithMe />
      </div>
    </section>
  );
}