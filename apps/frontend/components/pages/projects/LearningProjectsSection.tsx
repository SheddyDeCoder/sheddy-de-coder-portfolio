"use client";

import { motion } from "framer-motion";
import { LEARNING_PROJECTS } from "./projects.constants";

export function LearningProjectsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Learning & Experimental Projects
      </h2>
      <p className="mt-3 max-w-2xl font-body text-sm text-text-secondary">
        Smaller projects built while learning, testing ideas, and strengthening technical skills — not full case studies, just honest steps along the way.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {LEARNING_PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="rounded-lg border border-border bg-surface/40 p-5"
          >
            <h3 className="font-display text-base font-semibold text-text-primary">
              {project.name}
            </h3>
            <ul className="mt-2 space-y-1">
              {project.purpose.map((p) => (
                <li key={p} className="font-body text-xs text-text-secondary">
                  {p}
                </li>
              ))}
            </ul>
            {project.integrations && (
              <p className="mt-2 font-body text-xs text-primary/80">
                Integrations: {project.integrations.join(", ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}