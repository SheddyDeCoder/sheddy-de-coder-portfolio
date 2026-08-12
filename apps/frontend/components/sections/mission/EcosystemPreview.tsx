"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_NODES } from "./mission.constants";

export function EcosystemPreview() {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-full border border-primary/40 bg-surface px-6 py-3 font-display text-sm font-semibold text-primary md:text-base"
      >
        SHEDDY DE CODER
      </motion.div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-3 md:gap-4">
        {ECOSYSTEM_NODES.map((node, i) => (
          <motion.div
            key={node}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: "easeOut" }}
            className="rounded-md border border-border bg-surface/50 px-3 py-2 text-center font-body text-xs text-text-secondaryDark md:text-sm"
          >
            {node}
          </motion.div>
        ))}
      </div>
    </div>
  );
}