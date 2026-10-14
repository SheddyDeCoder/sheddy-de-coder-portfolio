
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function WorkWithMePreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="rounded-3xl border border-border bg-surface p-7 md:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Work With Me
        </p>

        <h2 className="max-w-2xl font-display text-3xl font-bold text-text-primary md:text-4xl">
          Have a problem worth solving?
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary md:text-base">
          Whether you're building a product, strengthening
          your digital presence, or improving business
          workflows, let's find a practical way forward.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work-with-me"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore Services
            <ArrowUpRight size={17} />
          </Link>

          <a
            href="https://calendly.com/sheddydecoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-primary"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
