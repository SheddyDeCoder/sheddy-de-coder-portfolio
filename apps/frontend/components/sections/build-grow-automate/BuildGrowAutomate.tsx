
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Search,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    title: "Build",
    description:
      "Websites, digital products, and platforms that solve real problems.",
    icon: Code2,
  },
  {
    title: "Grow",
    description:
      "SEO and digital visibility that help businesses get discovered and trusted.",
    icon: Search,
  },
  {
    title: "Automate",
    description:
      "Practical workflows that reduce manual work and improve efficiency.",
    icon: Workflow,
  },
] as const;

export function BuildGrowAutomate() {
  return (
    <section
      aria-labelledby="build-grow-automate"
      className="mx-auto max-w-6xl px-6 py-14 md:py-20"
    >
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          What I Do
        </p>

        <h2
          id="build-grow-automate"
          className="font-display text-3xl font-bold text-text-primary md:text-4xl"
        >
          Build. Grow. Automate.
        </h2>

        <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">
          Technology that helps you launch, get discovered,
          and work smarter.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <Icon
                size={24}
                strokeWidth={1.8}
                className="mb-6 text-primary"
              />

              <h3 className="font-display text-xl font-semibold text-text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <Link
        href="/work-with-me"
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
      >
        Explore Services
        <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
