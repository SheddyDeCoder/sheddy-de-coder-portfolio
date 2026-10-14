
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FLAGSHIP_AND_CLIENT_PROJECTS } from "./featured-projects.constants";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section
      aria-labelledby="selected-work-heading"
      className="mx-auto max-w-6xl px-6 py-14 md:py-20"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>

          <h2
            id="selected-work-heading"
            className="font-display text-3xl font-bold text-text-primary md:text-4xl"
          >
            Selected Work
          </h2>

          <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">
            A selection of products, platforms, and client
            projects I've helped bring to life.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
        >
          Explore All Projects
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FLAGSHIP_AND_CLIENT_PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
