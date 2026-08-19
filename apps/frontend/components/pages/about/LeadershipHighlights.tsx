"use client";

import { motion } from "framer-motion";
import { LEADERSHIP_HIGHLIGHTS } from "./about.constants";

export function LeadershipHighlights() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primaryDark md:text-3xl">
        Leadership & Involvement
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {LEADERSHIP_HIGHLIGHTS.map((entry, i) => (
          <motion.div
            key={`${entry.role}-${entry.org}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
            className="rounded-lg border border-border bg-surface/40 p-4"
          >
            <p className="font-display text-sm font-semibold text-text-primaryDark">
              {entry.role}
            </p>
            {entry.org && (
              <p className="mt-1 font-body text-sm text-text-secondaryDark">
                {entry.org}
              </p>
            )}
            {"note" in entry && entry.note && (
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-primary/70">
                {entry.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}