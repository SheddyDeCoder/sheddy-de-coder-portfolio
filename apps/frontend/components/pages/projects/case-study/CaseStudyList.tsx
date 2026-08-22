"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function CaseStudyList({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-3xl px-6 py-10"
    >
      <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
        {title}
      </h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
            <span className="font-body text-sm text-text-secondary">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}