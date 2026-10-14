
"use client";

import { motion } from "framer-motion";
import { FLOATING_DISCIPLINES } from "./mission.constants";

export function FloatingTechCards() {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 px-6 pb-12 md:gap-3 md:pb-16">
      {FLOATING_DISCIPLINES.map((discipline, i) => (
        <motion.div
          key={discipline}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: i * 0.035,
            ease: "easeOut",
          }}
          className="rounded-lg border border-border bg-surface/60 px-3 py-2 font-body text-xs text-text-secondary transition-colors hover:border-primary/30 hover:text-primary md:text-sm"
        >
          {discipline}
        </motion.div>
      ))}
    </div>
  );
}
