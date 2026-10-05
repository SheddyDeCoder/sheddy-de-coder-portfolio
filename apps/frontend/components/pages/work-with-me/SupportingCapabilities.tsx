"use client";

import { motion } from "framer-motion";
import { SUPPORTING_CAPABILITIES } from "./work-with-me.constants";

export function SupportingCapabilities() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Supporting Capabilities
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold text-text-primary md:text-3xl">
            More ways I can contribute.
          </h2>

          <p className="mt-4 font-body text-base leading-7 text-text-secondary">
            Capabilities that support the larger work — from shaping products
            to strengthening brands, systems, and digital experiences.
          </p>
        </div>

        <div className="w-full max-w-xl">
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {SUPPORTING_CAPABILITIES.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className="flex items-center gap-3 border-b border-border/60 pb-3 font-body text-sm text-text-primary"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />

                {capability}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}