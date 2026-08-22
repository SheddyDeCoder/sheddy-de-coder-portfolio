"use client";

import { motion } from "framer-motion";
import { FUTURE_RESOURCES } from "./work-with-me.constants";

export function FutureResourcesTeaser() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
      <span className="rounded-full border border-border px-3 py-1 font-body text-xs text-text-secondary">
        Coming Soon
      </span>
      <h2 className="mt-4 font-display text-2xl font-bold text-text-primary md:text-3xl">
        Free Resources
      </h2>
      <p className="mx-auto mt-3 max-w-xl font-body text-sm text-text-secondary">
        Practical resources are on the way — currently in planning.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {FUTURE_RESOURCES.map((resource) => (
          <span
            key={resource}
            className="rounded-full border border-border px-3 py-1 font-body text-xs text-text-secondary opacity-60"
          >
            {resource}
          </span>
        ))}
      </div>
    </section>
  );
}