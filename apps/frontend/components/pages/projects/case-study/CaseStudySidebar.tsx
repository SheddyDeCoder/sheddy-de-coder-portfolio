"use client";

import { Github, ExternalLink, Lock } from "lucide-react";
import type { CaseStudy } from "../projects.types";

export function CaseStudySidebar({ project }: { project: CaseStudy }) {
  return (
    <aside className="mx-auto max-w-3xl space-y-8 px-6 py-10">
      {project.technologies && project.technologies.length > 0 && (
        <div>
          <h3 className="font-display text-sm font-semibold text-text-primary">
            Technologies
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border px-2 py-1 font-body text-xs text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.repository.type || project.liveUrl) && (
        <div className="flex flex-wrap gap-3">
          {project.repository.type === "public" && project.repository.url && (
            <a
              href={project.repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 font-body text-sm text-text-primary hover:border-primary"
            >
              <Github className="h-4 w-4" />
              View Repository
            </a>
          )}
          {project.repository.type === "private" && (
            <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2 font-body text-sm text-text-secondary opacity-70">
              <Lock className="h-4 w-4" />
              Private Repository
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 font-body text-sm text-white"
            >
              <ExternalLink className="h-4 w-4" />
              View Live
            </a>
          )}
        </div>
      )}

      {project.team && (
        <div>
          <h3 className="font-display text-sm font-semibold text-text-primary">Team</h3>
          <p className="mt-2 font-body text-sm text-text-secondary">{project.team}</p>
        </div>
      )}

      {project.community && (
        <div>
          <h3 className="font-display text-sm font-semibold text-text-primary">Community</h3>
          <p className="mt-2 font-body text-sm text-text-secondary">{project.community}</p>
        </div>
      )}

      {project.deployment && (
        <p className="font-body text-xs text-text-secondary">{project.deployment}</p>
      )}

      {project.documentation && project.documentation.length > 0 && (
        <div>
          <h3 className="font-display text-sm font-semibold text-text-primary">
            Documentation
          </h3>
          <ul className="mt-2 space-y-1">
            {project.documentation.map((doc) => (
              <li key={doc} className="font-body text-sm text-text-secondary">
                {doc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}