"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASE_STUDIES, CATEGORY_LABELS } from "./projects.constants";
import type { ProjectCategory } from "./projects.types";

const ORDER: ProjectCategory[] = ["featured", "startup-collaboration", "client"];

export function ProjectsListing() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      {ORDER.map((category) => {
        const projects = CASE_STUDIES.filter((p) => p.category === category);
        if (projects.length === 0) return null;

        return (
          <div key={category} className="mb-16">
            <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
              {CATEGORY_LABELS[category]}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {projects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block cursor-pointer rounded-lg border border-border bg-surface/40 p-6 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
                  >
                    {/* ...status badges, title, overview... */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.status && (
                        <span className="rounded-full border border-primary/30 px-2 py-0.5 font-body text-xs text-primary">
                          {project.status}
                        </span>
                      )}
                      {!project.isRealProduct && (
                        <span className="rounded-full border border-border px-2 py-0.5 font-body text-xs text-text-secondary">
                          Simulation
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-body text-sm text-text-secondary">
                      {project.overview}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-body text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      View Case Study →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}