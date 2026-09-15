import Link from "next/link";
import { Button } from "@sheddy/ui";
import { BOOKING_LINKS } from "@/components/shared/booking";

export function AboutCTA() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Let's build something meaningful together.
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {BOOKING_LINKS.scheduler ? (
  <a href={BOOKING_LINKS.scheduler} target="_blank" rel="noopener noreferrer">
    <Button size="lg">Book a Call</Button>
  </a>
) : (
  <Button size="lg" asChild>
    <Link href="/contact">Book a Call</Link>
  </Button>
)}
        <Button asChild variant="outline" size="lg">
          <Link href="/work-with-me">See How We Can Work Together</Link>
        </Button>
      </div>
    </section>
  );
}