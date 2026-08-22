import {
  FLAGSHIP_AND_CLIENT_PROJECTS,
  LEARNING_ARCHIVE_PROJECTS,
} from "./featured-projects.constants";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-display text-2xl font-bold text-text-primary md:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-3 max-w-2xl font-body text-text-secondary">
          A selection of products, platforms and digital experiences built
          to solve meaningful problems through technology, design and
          innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FLAGSHIP_AND_CLIENT_PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {LEARNING_ARCHIVE_PROJECTS.length > 0 && (
        <div className="mt-20">
          <h3 className="mb-6 font-display text-xl font-semibold text-text-primary">
            Learning Archive
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEARNING_ARCHIVE_PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}