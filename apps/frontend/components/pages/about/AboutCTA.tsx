import Link from "next/link";
import { Button } from "@sheddy/ui";

export function AboutCTA() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Let's build something meaningful together.
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/contact">Book a Call</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/work-with-me">See How We Can Work Together</Link>
        </Button>
      </div>
    </section>
  );
}