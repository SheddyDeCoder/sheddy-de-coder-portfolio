"use client";

import { motion } from "framer-motion";

export function ServiceCategoryGrid({
  title,
  services,
}: {
  title: string;
  services: readonly string[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        {title}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface/40 p-4"
          >
            <span className="font-body text-sm text-text-primary">
              {service}
            </span>
            <span className="font-body text-xs text-text-secondary">
              Contact for Pricing
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}