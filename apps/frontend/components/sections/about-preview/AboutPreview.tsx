import Image from "next/image";
import Link from "next/link";
import { Button } from "@sheddy/ui";
import { AboutBio } from "./AboutBio";
import { PhilosophyQuote } from "./PhilosophyQuote";
import { QuickTimeline } from "./QuickTimeline";
import { LeadershipHighlights } from "./LeadershipHighlights";
import { ValuesGrid } from "./ValuesGrid";
import { SkillsSnapshot } from "./SkillsSnapshot";
import { PersonalImpact } from "./PersonalImpact";
import {
  ABOUT_INTRO,
  ABOUT_PORTRAIT,
} from "./about-preview.constants";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-start">
        <div className="relative aspect-[3/4] w-full max-w-sm flex-shrink-0">
          <Image
            src={ABOUT_PORTRAIT.src}
            alt={ABOUT_PORTRAIT.alt}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-text-primary md:text-4xl">
              {ABOUT_INTRO.heading}
            </h2>
            <p className="mt-2 font-body text-base text-primary">
              {ABOUT_INTRO.subheading}
            </p>
            <p className="mt-4 max-w-xl font-body text-sm text-text-secondary md:text-base">
              {ABOUT_INTRO.body}
            </p>
          </div>

          <AboutBio />
          <PhilosophyQuote />

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
              Journey
            </h3>
            <QuickTimeline />
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
              Leadership
            </h3>
            <LeadershipHighlights />
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
              Values
            </h3>
            <ValuesGrid />
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
              Skills
            </h3>
            <SkillsSnapshot />
          </div>

          <PersonalImpact />

          <Button asChild className="self-start">
            <Link href={ABOUT_INTRO.cta.href}>{ABOUT_INTRO.cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}