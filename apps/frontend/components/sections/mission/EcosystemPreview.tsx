
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ECOSYSTEM_NODES } from "./mission.constants";

export function EcosystemPreview() {
  return (
    <section
      aria-labelledby="ecosystem-heading"
      className="mx-auto max-w-6xl px-6 py-14 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Beyond the Portfolio
        </p>

        <h2
          id="ecosystem-heading"
          className="font-display text-3xl font-bold text-text-primary md:text-4xl"
        >
          Building Beyond Myself
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary md:text-base">
          Through TechMindsVerse, I'm building an ecosystem
          where founders, builders, and communities can
          learn, collaborate, and create meaningful technology.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {ECOSYSTEM_NODES.map((node) => (
            <span
              key={node}
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs text-text-secondary md:text-sm"
            >
              {node}
            </span>
          ))}
        </div>

        <Link
          href="/techmindsverse"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
        >
          Explore TechMindsVerse
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
