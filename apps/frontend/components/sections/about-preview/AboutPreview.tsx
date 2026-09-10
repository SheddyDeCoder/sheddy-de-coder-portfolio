import Link from "next/link";
import Image from "next/image";
import { Button } from "@sheddy/ui";
import { PhilosophyQuote } from "./PhilosophyQuote";
import { PersonalImpact } from "./PersonalImpact";
import { ABOUT_INTRO, ABOUT_PORTRAIT, DECODER_LINE } from "./about-preview.constants";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-12 md:flex-row md:items-start">
        <div className="relative aspect-[3/4] w-full max-w-sm flex-shrink-0 md:sticky md:top-24">
          <Image
            src={ABOUT_PORTRAIT.src}
            alt={ABOUT_PORTRAIT.alt}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-8">
          <div>
            <span className="font-body text-xs uppercase tracking-wide text-primary">
              Meet the Founder
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-text-primary md:text-4xl">
              {ABOUT_INTRO.heading}
            </h2>
            <p className="mt-4 max-w-xl font-body text-sm text-text-secondary md:text-base">
              {ABOUT_INTRO.body}
            </p>
            <p className="mt-4 max-w-xl font-body text-sm italic text-text-secondary md:text-base">
              {DECODER_LINE}
            </p>
          </div>

          <PhilosophyQuote />
          <PersonalImpact />

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href="/about">Read My Full Story</Link>
            </Button>
            <Link
              href={ABOUT_INTRO.cta.href}
              className="font-body text-sm text-text-secondary underline underline-offset-4 hover:text-primary"
            >
              {ABOUT_INTRO.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}