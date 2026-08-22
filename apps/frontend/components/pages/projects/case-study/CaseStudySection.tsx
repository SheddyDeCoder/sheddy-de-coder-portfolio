"use client";

import { motion } from "framer-motion";

export function CaseStudySection({
  title,
  content,
}: {
  title: string;
  content?: string;
}) {
  if (!content) return null;

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
      <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
        {content}
      </p>
    </motion.section>
  );
}