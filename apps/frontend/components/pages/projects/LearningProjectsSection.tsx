"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FlaskConical,
} from "lucide-react";

import { LEARNING_PROJECTS } from "./projects.constants";

export function LearningProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
            <FlaskConical className="h-4 w-4" />
          </span>

          <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Learning & Experimental
          </p>
        </div>

        <h2 className="mt-5 font-display text-3xl font-bold text-text-primary md:text-4xl">
          Smaller builds that shaped my technical journey.
        </h2>

        <p className="mt-4 max-w-2xl font-body text-sm leading-7 text-text-secondary md:text-base">
          Smaller projects built while learning, testing ideas, and
          strengthening technical skills — not full case studies, just honest
          steps along the way.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {LEARNING_PROJECTS.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-primary">
                  <Code2 className="h-4 w-4" />
                </div>

                <span className="font-mono text-[10px] text-text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 font-display text-lg font-semibold text-text-primary">
                {project.name}
              </h3>

              <ul className="mt-4 space-y-2">
                {project.purpose.map((purpose) => (
                  <li
                    key={purpose}
                    className="flex items-start gap-2 font-body text-xs leading-5 text-text-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {purpose}
                  </li>
                ))}
              </ul>

              {project.integrations &&
                project.integrations.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.integrations.map((integration) => (
                      <span
                        key={integration}
                        className="rounded-md border border-border px-2 py-1 font-body text-[10px] text-text-secondary"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                )}

              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-body text-xs font-semibold text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View Repository
                </a>
              )}

              {!project.repository && (
                <div className="mt-6 inline-flex items-center gap-2 font-body text-xs text-text-secondary transition-colors group-hover:text-primary">
                  Experimental build
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}