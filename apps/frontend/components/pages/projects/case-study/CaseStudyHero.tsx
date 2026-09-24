"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Github } from "lucide-react";
import type { CaseStudy } from "../projects.types";

export function CaseStudyHero({ project }: { project: CaseStudy }) {
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-wrap items-center gap-2">
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

        <h1 className="mt-6 max-w-5xl font-display text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl font-body text-base leading-7 text-text-secondary md:text-lg">
          {project.overview}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.role.map((role) => (
            <span
              key={role}
              className="rounded-md bg-surface px-3 py-1.5 font-body text-xs text-text-secondary"
            >
              {role}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.repository.type === "public") && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-body text-sm font-medium text-white"
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </a>
            )}
            {project.repository.type === "public" && project.repository.url && (
              <a
                href={project.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-body text-sm font-medium text-text-primary hover:border-primary"
              >
                <Github className="h-4 w-4" />
                View Repository
              </a>
            )}
          </div>
        )}
      </motion.div>

      {project.coverImage && !coverFailed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              onError={() => setCoverFailed(true)}
            />
          </div>
        </motion.div>
      )}

      <div className="mt-8 flex items-center gap-2 font-body text-xs text-text-secondary">
        <ArrowDown className="h-3.5 w-3.5" />
        Explore the project
      </div>
    </section>
  );
}