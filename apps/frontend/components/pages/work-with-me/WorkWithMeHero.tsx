"use client";

import { motion } from "framer-motion";
import { POSITIONING, PRIMARY_SERVICE } from "./work-with-me.constants";
import { CURRENT_AVAILABILITY, AVAILABILITY_LABELS } from "./work-with-me.config";

export function WorkWithMeHero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="inline-block rounded-full border border-primary/30 px-4 py-1 font-body text-xs font-medium text-primary"
      >
        {AVAILABILITY_LABELS[CURRENT_AVAILABILITY]}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mt-6 font-display text-3xl font-bold text-text-primary md:text-5xl"
      >
        {POSITIONING.heading}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-6 max-w-2xl font-body text-base text-text-secondary md:text-lg"
      >
        {POSITIONING.body}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="mt-8 font-body text-sm text-text-secondary"
      >
        Flagship service: <span className="text-primary">{PRIMARY_SERVICE.name}</span>
      </motion.p>
    </section>
  );
}