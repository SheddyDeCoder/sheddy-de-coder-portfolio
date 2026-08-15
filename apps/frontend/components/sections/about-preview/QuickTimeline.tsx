"use client";

import { motion } from "framer-motion";
import { QUICK_TIMELINE } from "./about-preview.constants";

export function QuickTimeline() {
  return (
    <div className="flex flex-col gap-4 border-l border-border pl-6">
      {QUICK_TIMELINE.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
        >
          <span className="font-display text-sm font-semibold text-primary">
            {item.year}
          </span>
          <p className="mt-1 font-body text-sm text-text-secondaryDark">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}