"use client";

import { motion } from "framer-motion";
import { FLOATING_DISCIPLINES } from "./mission.constants";

export function FloatingTechCards() {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-6 pb-24 md:gap-4">
      {FLOATING_DISCIPLINES.map((discipline, i) => (
        <motion.div
          key={discipline}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
          className="rounded-lg border border-border bg-surface/60 px-4 py-2 font-body text-sm text-text-secondary backdrop-blur-sm md:hover:-translate-y-1 md:hover:text-primary md:transition-transform"
        >
          {discipline}
        </motion.div>
      ))}
    </div>
  );
}