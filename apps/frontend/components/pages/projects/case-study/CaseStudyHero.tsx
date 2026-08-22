"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "../projects.types";

export function CaseStudyHero({ project }: { project: CaseStudy }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-wrap items-center gap-3">
          {project.status && (
            <span className="rounded-full border border-primary/30 px-3 py-1 font-body text-xs font-medium text-primary">
              {project.status}
            </span>
          )}
          {!project.isRealProduct && (
            <span className="rounded-full border border-border px-3 py-1 font-body text-xs font-medium text-text-secondary">
              Educational Simulation — Not a Live Product
            </span>
          )}
          {project.industry && (
            <span className="font-body text-xs text-text-secondary">
              {project.industry}
            </span>
          )}
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold text-text-primary md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-text-secondary md:text-lg">
          {project.overview}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.role.map((r) => (
            <span
              key={r}
              className="rounded-full bg-surface px-3 py-1 font-body text-xs text-text-secondary"
            >
              {r}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}