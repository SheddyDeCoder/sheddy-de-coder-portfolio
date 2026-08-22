"use client";

import { motion } from "framer-motion";
import { SERVICE_PROCESS } from "./work-with-me.constants";

export function ServiceProcess() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        How We'll Work Together
      </h2>
      <ol className="mt-10 space-y-6">
        {SERVICE_PROCESS.map((step, i) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary font-display text-sm font-semibold text-primary">
              {i + 1}
            </span>
            <span className="font-body text-base text-text-primary">
              {step}
            </span>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}