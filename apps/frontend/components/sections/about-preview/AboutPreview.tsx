
import Link from "next/link";
import Image from "next/image";
import { Button } from "@sheddy/ui";
import { PhilosophyQuote } from "./PhilosophyQuote";
import { PersonalImpact } from "./PersonalImpact";
import {
  ABOUT_INTRO,
  ABOUT_PORTRAIT,
  DECODER_LINE,
} from "./about-preview.constants";

export function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="mx-auto max-w-6xl px-6 py-14 md:py-20"
    >
      <div className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl">
          <Image
            src={ABOUT_PORTRAIT.src}
            alt={ABOUT_PORTRAIT.alt}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Behind the Brand
            </p>

            <h2
              id="about-preview-heading"
              className="font-display text-3xl font-bold text-text-primary md:text-4xl"
            >
              Meet Shedrack Nliam
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary md:text-base">
              {ABOUT_INTRO.body}
            </p>

            <p className="mt-3 max-w-xl text-sm italic leading-6 text-text-secondary">
              {DECODER_LINE}
            </p>
          </div>

          <PhilosophyQuote />
          <PersonalImpact />

          <div>
            <Button asChild>
              <Link href="/about">Read My Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
