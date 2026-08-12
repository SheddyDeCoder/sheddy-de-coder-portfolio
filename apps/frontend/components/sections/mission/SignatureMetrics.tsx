"use client";

import { motion } from "framer-motion";
import { SIGNATURE_METRICS } from "./mission.constants";

export function SignatureMetrics() {
  const hasData = SIGNATURE_METRICS.some((m) => m.value !== null);
  if (!hasData) return null;

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-16 text-center md:grid-cols-4">
      {SIGNATURE_METRICS.filter((m) => m.value !== null).map((metric) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="font-display text-3xl font-bold text-primary">
            {metric.value}
          </p>
          <p className="mt-1 font-body text-sm text-text-secondaryDark">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}