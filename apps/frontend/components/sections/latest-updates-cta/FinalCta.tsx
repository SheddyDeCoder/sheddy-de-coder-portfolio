
import Link from "next/link";
import { Button } from "@sheddy/ui";
import { FINAL_CTA, CLOSING_BRAND_LINE } from "./latest-updates-cta.constants";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 text-center md:py-20">
      <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
        {FINAL_CTA.heading}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-secondary md:text-base">
        {FINAL_CTA.body}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <a
            href={FINAL_CTA.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {FINAL_CTA.primaryCta.label}
          </a>
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href={FINAL_CTA.secondaryCta.href}>
            {FINAL_CTA.secondaryCta.label}
          </Link>
        </Button>
      </div>

      <p className="mt-12 font-display text-sm tracking-wide text-text-secondary">
        {CLOSING_BRAND_LINE}
      </p>
    </section>
  );
}
