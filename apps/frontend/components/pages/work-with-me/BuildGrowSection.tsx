"use client";

import { motion } from "framer-motion";
import { BUILD_GROW } from "./work-with-me.constants";

function BuildVisual() {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl border border-primary/10 bg-primary/[0.025]">
      {/* Connected system */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-px w-44 -translate-x-1/2 -translate-y-1/2 rotate-[25deg] bg-primary/20"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-px w-44 -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] bg-primary/20"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/30 bg-background shadow-sm"
      >
        <div className="absolute inset-3 rounded-lg bg-primary/10" />
      </div>

      <div
        aria-hidden="true"
        className="absolute left-[20%] top-[22%] h-8 w-8 rounded-full border border-primary/30 bg-background"
      />

      <div
        aria-hidden="true"
        className="absolute right-[18%] top-[22%] h-8 w-8 rounded-full border border-primary/30 bg-background"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[18%] left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border border-primary/30 bg-background"
      />

      <div className="absolute bottom-4 left-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="font-body text-[10px] uppercase tracking-[0.14em] text-text-secondary">
          Problem → Product
        </span>
      </div>
    </div>
  );
}

function GrowVisual() {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl border border-primary/10 bg-primary/[0.025]">
      {/* Search / growth interface */}
      <div className="absolute left-6 right-6 top-6 h-9 rounded-full border border-border bg-background shadow-sm">
        <div className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-primary/40" />
        <div className="absolute left-10 top-1/2 h-1.5 w-24 -translate-y-1/2 rounded-full bg-border" />
      </div>

      <svg
        viewBox="0 0 320 120"
        className="absolute bottom-8 left-1/2 h-24 w-[85%] -translate-x-1/2"
        aria-hidden="true"
      >
        <path
          d="M10 105 C55 98, 60 85, 95 88 S135 70, 160 72 S205 48, 225 53 S270 27, 310 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary/50"
        />

        <circle
          cx="310"
          cy="8"
          r="5"
          className="fill-primary"
        />

        <circle
          cx="225"
          cy="53"
          r="3"
          className="fill-primary/50"
        />

        <circle
          cx="160"
          cy="72"
          r="3"
          className="fill-primary/40"
        />
      </svg>

      <div className="absolute bottom-4 left-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="font-body text-[10px] uppercase tracking-[0.14em] text-text-secondary">
          Search → Visibility
        </span>
      </div>
    </div>
  );
}

export function BuildGrowSection() {
  const pillars = [
    {
      ...BUILD_GROW.build,
      visual: <BuildVisual />,
    },
    {
      ...BUILD_GROW.grow,
      visual: <GrowVisual />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            What I Do
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold text-text-primary md:text-3xl">
            Build. Grow.
          </h2>

          <p className="mt-4 font-body text-base leading-7 text-text-secondary">
            I work across technology and digital visibility to help ideas become
            useful products and help those products and brands get discovered.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-border bg-surface/40 p-5 transition-colors duration-300 hover:border-primary/20 md:p-6"
            >
              {pillar.visual}

              <div className="mt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-body text-xs font-semibold tracking-[0.16em] text-primary">
                    {pillar.label}
                  </p>

                  <span className="font-body text-xs text-text-secondary">
                    {index === 0 ? "01" : "02"}
                  </span>
                </div>

                <h3 className="mt-4 max-w-md font-display text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
                  {pillar.heading}
                </h3>

                <p className="mt-4 max-w-xl font-body text-sm leading-7 text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}