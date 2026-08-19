import { Button } from "@sheddy/ui";
import Link from "next/link";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { ProjectCoverImage } from "./ProjectCoverImage";
import type { Project } from "./featured-projects.types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-transform hover:-translate-y-1">
      <ProjectCoverImage
        src={project.coverImage}
        alt={project.name}
        projectName={project.name}
      />

      <div className="flex items-center justify-between gap-2">
        <span className="font-body text-xs uppercase tracking-wide text-text-secondaryDark">
          {project.category}
        </span>
        <ProjectStatusBadge status={project.status} />
      </div>

      <h3 className="font-display text-lg font-semibold text-text-primaryDark">
        {project.name}
      </h3>

      <p className="font-body text-sm text-text-secondaryDark">
        {project.description}
      </p>

      <p className="font-body text-xs text-text-secondaryDark">
        <span className="font-medium text-text-primaryDark">Role:</span>{" "}
        {project.role}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border px-2 py-1 font-code text-xs text-text-secondaryDark"
          >
            {tech}
          </span>
        ))}
      </div>

      <Button asChild variant="outline" className="mt-2 self-start">
        <Link href={`/projects/${project.slug}`}>View Case Study</Link>
      </Button>
    </article>
  );
}