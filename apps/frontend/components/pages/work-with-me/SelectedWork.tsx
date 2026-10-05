"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { CASE_STUDIES } from "@/components/pages/projects/projects.constants";

export function SelectedWork() {
  const projects = CASE_STUDIES.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Selected Work
          </p>

          <h2 className="mt-3 font-display text-2xl font-bold text-text-primary md:text-3xl">
            Work that shows how I build.
          </h2>

          <p className="mt-4 font-body text-base leading-7 text-text-secondary">
            A few projects that reflect my approach to technology, product
            development, and solving real problems.
          </p>
        </div>

        <Link
          href="/projects"
          className="font-body text-sm font-semibold text-primary hover:underline"
        >
          View All Projects →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
              ease: "easeOut",
            }}
            className="group overflow-hidden rounded-xl border border-border bg-surface/40 transition-colors duration-300 hover:border-primary/40"
          >
            {project.coverImage ? (
              <Link
                href={`/projects/${project.slug}`}
                className="block"
                aria-label={`View ${project.title} case study`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>
            ) : null}

            <div className="p-6">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {project.category}
              </p>

              <h3 className="mt-2 font-display text-lg font-semibold text-text-primary">
                {project.title}
              </h3>

              <p className="mt-3 line-clamp-3 font-body text-sm leading-6 text-text-secondary">
                {project.overview}
              </p>

              {project.role.length > 0 ? (
                <div className="mt-5">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    My Role
                  </p>

                  <p className="mt-2 line-clamp-2 font-body text-sm leading-6 text-text-primary">
                    {project.role.slice(0, 3).join(" · ")}
                    {project.role.length > 3 ? " +" : ""}
                  </p>
                </div>
              ) : null}

              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 inline-flex font-body text-sm font-semibold text-primary hover:underline"
              >
                View Case Study →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}