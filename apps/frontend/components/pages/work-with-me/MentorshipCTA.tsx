import Link from "next/link";
import { Button } from "@sheddy/ui";
import { MENTORSHIP } from "./work-with-me.constants";

export function MentorshipCTA() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        {MENTORSHIP.heading}
      </h2>
      <p className="mt-4 font-body text-base text-text-secondary">
        {MENTORSHIP.description}
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/contact">{MENTORSHIP.ctaLabel}</Link>
      </Button>
    </section>
  );
}