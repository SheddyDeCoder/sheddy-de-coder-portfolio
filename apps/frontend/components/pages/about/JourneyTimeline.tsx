"use client";

import { motion } from "framer-motion";
import { JOURNEY_TIMELINE } from "./about.constants";

export function JourneyTimeline() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        The Journey
      </h2>

      <div className="mt-10 space-y-8 border-l border-border pl-6">
        {JOURNEY_TIMELINE.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="relative"
          >
            <span className="absolute -left-[29px] top-1 h-2 w-2 rounded-full bg-primary" />
            <p className="font-display text-sm font-semibold text-primary">
              {entry.year}
            </p>
            <p className="mt-1 font-body text-base text-text-secondary">
              {entry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}