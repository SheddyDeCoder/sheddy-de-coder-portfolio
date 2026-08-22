"use client";

import { motion } from "framer-motion";
import { CAREER_HIGHLIGHTS } from "./about.constants";

const ITEMS = [
  { label: "Biggest Achievement", value: CAREER_HIGHLIGHTS.biggestAchievement },
  { label: "Most Proud Project", value: CAREER_HIGHLIGHTS.mostProudProject },
  { label: "Hardest Technical Challenge", value: CAREER_HIGHLIGHTS.hardestTechnicalChallenge },
  { label: "Hardest Life Challenge", value: CAREER_HIGHLIGHTS.hardestLifeChallenge },
  { label: "Professional Identity", value: CAREER_HIGHLIGHTS.professionalIdentity },
];

export function CareerHighlights() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Career Highlights
      </h2>

      <div className="mt-8 space-y-6">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
            className="border-l-2 border-border pl-4"
          >
            <p className="font-display text-sm font-semibold text-primary">
              {item.label}
            </p>
            <p className="mt-1 font-body text-base text-text-secondary">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        className="mt-10 border-l-2 border-primary pl-4 font-body text-lg italic text-text-primary"
      >
        {CAREER_HIGHLIGHTS.corePhilosophy}
      </motion.p>
    </section>
  );
}