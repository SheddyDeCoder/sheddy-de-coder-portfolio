"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Lock,
} from "lucide-react";

import { CASE_STUDIES, CATEGORY_LABELS } from "./projects.constants";
import type { CaseStudy, ProjectCategory } from "./projects.types";

const ORDER: ProjectCategory[] = [
  "featured",
  "startup-collaboration",
  "client",
];

function getProjectImage(project: CaseStudy) {
  if (!project.coverImage) return null;
  return { src: project.coverImage, alt: `${project.title} cover` };
}

function ProjectImage({
  image,
  className,
}: {
  image: { src: string; alt: string } | null;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="flex h-full items-center justify-center bg-surface">
        <span className="font-body text-xs text-text-secondary">
          Project Preview
        </span>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className ?? ""}`}
    />
  );
}

function ProjectLinks({ project }: { project: CaseStudy }) {
  const hasRepository =
    project.repository.type === "public" && !!project.repository.url;

  const hasPrivateRepository = project.repository.type === "private";

  const hasLiveUrl = !!project.liveUrl;

  if (!hasRepository && !hasPrivateRepository && !hasLiveUrl) {
    return null;
  }

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {hasLiveUrl && (
        <a
          href={project.liveUrl!}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live Site
        </a>
      )}

      {hasRepository && (
        <a
          href={project.repository.url!}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-primary"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </a>
      )}

      {hasPrivateRepository && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary">
          <Lock className="h-3.5 w-3.5" />
          Private
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: CaseStudy }) {
  const image = getProjectImage(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block overflow-hidden rounded-2xl border border-border bg-surface/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
      >
        {/* Visual */}
        <div className="relative aspect-[16/9] overflow-hidden bg-surface">
          <ProjectImage
            image={image}
            className="transition-transform duration-500 group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {project.status && (
              <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                {project.status}
              </span>
            )}

            {!project.isRealProduct && (
              <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] text-white backdrop-blur-md">
                Simulation
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              {project.industry && (
                <p className="font-body text-xs font-medium uppercase tracking-[0.12em] text-primary">
                  {project.industry}
                </p>
              )}

              <h3 className="mt-2 font-display text-xl font-semibold text-text-primary md:text-2xl">
                {project.title}
              </h3>
            </div>

            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-all group-hover:border-primary group-hover:text-primary">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <p className="mt-4 line-clamp-3 font-body text-sm leading-6 text-text-secondary">
            {project.overview}
          </p>

          {project.role.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.role.slice(0, 3).map((role) => (
                <span
                  key={role}
                  className="rounded-md bg-surface px-2.5 py-1 font-body text-[11px] text-text-secondary"
                >
                  {role}
                </span>
              ))}

              {project.role.length > 3 && (
                <span className="rounded-md bg-surface px-2.5 py-1 font-body text-[11px] text-text-secondary">
                  +{project.role.length - 3}
                </span>
              )}
            </div>
          )}

          <ProjectLinks project={project} />

          <div className="mt-6 flex items-center gap-2 font-body text-xs font-semibold text-primary">
            Explore Case Study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function FeaturedProject({
  project,
}: {
  project: CaseStudy;
}) {
  const image = getProjectImage(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="grid overflow-hidden rounded-3xl border border-border bg-surface/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl lg:grid-cols-[1.35fr_1fr]"
      >
        <div className="relative min-h-[280px] overflow-hidden bg-surface lg:min-h-[430px]">
          <ProjectImage
            image={image}
            className="transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-7 md:p-10">
          <div className="flex flex-wrap gap-2">
            {project.status && (
              <span className="rounded-full border border-primary/30 px-3 py-1 font-body text-xs font-medium text-primary">
                {project.status}
              </span>
            )}

            {project.industry && (
              <span className="rounded-full bg-surface px-3 py-1 font-body text-xs text-text-secondary">
                {project.industry}
              </span>
            )}
          </div>

          <h3 className="mt-5 font-display text-3xl font-bold text-text-primary md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 font-body text-sm leading-7 text-text-secondary md:text-base">
            {project.overview}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.role.slice(0, 4).map((role) => (
              <span
                key={role}
                className="rounded-md bg-surface px-2.5 py-1 font-body text-xs text-text-secondary"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary">
            Explore Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectsListing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-16 max-w-3xl">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Selected Work
        </p>

        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          Projects & Case Studies
        </h1>

        <p className="mt-5 max-w-2xl font-body text-base leading-7 text-text-secondary md:text-lg">
          A collection of products, collaborations, client work, and
          experiments that show how I approach technology, product development,
          and problem solving.
        </p>
      </div>

      {ORDER.map((category) => {
        const projects = CASE_STUDIES.filter(
          (project) => project.category === category,
        );

        if (projects.length === 0) return null;

        const isFeatured = category === "featured";

        return (
          <div key={category} className="mb-20 last:mb-0">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
                  {CATEGORY_LABELS[category]}
                </h2>

                <div className="mt-3 h-px w-12 bg-primary" />
              </div>

              <span className="font-body text-xs text-text-secondary">
                {projects.length}{" "}
                {projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            {isFeatured ? (
              <div className="space-y-7">
                {projects.map((project) => (
                  <FeaturedProject
                    key={project.slug}
                    project={project}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}