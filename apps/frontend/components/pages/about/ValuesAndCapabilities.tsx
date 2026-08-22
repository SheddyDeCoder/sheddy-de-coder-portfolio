"use client";

import { motion } from "framer-motion";
import { CORE_VALUES, CAPABILITIES, IMPACT_METRICS } from "./about.constants";

export function ValuesAndCapabilities() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-text-primary">
            Values
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {CORE_VALUES.map((value, i) => (
              <motion.span
                key={value}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03, ease: "easeOut" }}
                className="rounded-full border border-border px-3 py-1 font-body text-sm text-text-secondary"
              >
                {value}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-text-primary">
            Capabilities
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {CAPABILITIES.map((capability, i) => (
              <motion.span
                key={capability}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03, ease: "easeOut" }}
                className="rounded-full border border-primary/30 px-3 py-1 font-body text-sm text-primary"
              >
                {capability}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 text-center md:grid-cols-3">
        {IMPACT_METRICS.map((metric) => (
          <div key={metric.label}>
            <p className="font-display text-2xl font-bold text-primary md:text-3xl">
              {metric.value}
            </p>
            <p className="mt-1 font-body text-xs text-text-secondary md:text-sm">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}