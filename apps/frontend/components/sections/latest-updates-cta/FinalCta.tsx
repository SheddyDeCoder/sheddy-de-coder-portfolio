import Link from "next/link";
import { Button } from "@sheddy/ui";
import { FINAL_CTA, CLOSING_BRAND_LINE } from "./latest-updates-cta.constants";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="font-display text-2xl font-bold text-text-primaryDark md:text-4xl">
        {FINAL_CTA.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-xl font-body text-text-secondaryDark">
        {FINAL_CTA.body}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href={FINAL_CTA.primaryCta.href}>
            {FINAL_CTA.primaryCta.label}
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={FINAL_CTA.secondaryCta.href}>
            {FINAL_CTA.secondaryCta.label}
          </Link>
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {FINAL_CTA.tertiaryActions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="font-body text-sm text-text-secondaryDark underline underline-offset-4 hover:text-primary"
          >
            {action.label}
          </Link>
        ))}
      </div>

      <p className="mt-16 font-display text-sm tracking-wide text-text-secondaryDark">
        {CLOSING_BRAND_LINE}
      </p>
    </section>
  );
}