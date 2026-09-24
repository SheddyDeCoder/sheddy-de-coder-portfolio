"use client";

import {
  Github,
  ExternalLink,
  Lock,
  Server,
  Users,
  FileText,
} from "lucide-react";

import type { CaseStudy } from "../projects.types";

function MetaBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border pt-5 first:border-t-0 first:pt-0">
      <h3 className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-text-primary">
        {title}
      </h3>

      <div className="mt-3">{children}</div>
    </div>
  );
}

export function CaseStudySidebar({
  project,
}: {
  project: CaseStudy;
}) {
  const hasPublicRepository =
    project.repository.type === "public" &&
    !!project.repository.url;

  return (
    <aside className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {project.technologies &&
            project.technologies.length > 0 && (
              <MetaBlock title="Technologies">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border px-2.5 py-1 font-body text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </MetaBlock>
            )}

          {(hasPublicRepository ||
            project.repository.type === "private" ||
            project.liveUrl) && (
            <MetaBlock title="Project Links">
              <div className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-body text-xs font-medium text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Live
                  </a>
                )}

                {hasPublicRepository && (
                  <a
                    href={project.repository.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-body text-xs text-text-primary hover:border-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Repository
                  </a>
                )}

                {project.repository.type === "private" && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-body text-xs text-text-secondary">
                    <Lock className="h-3.5 w-3.5" />
                    Private Repository
                  </span>
                )}
              </div>
            </MetaBlock>
          )}

          {project.team && (
            <MetaBlock title="Team">
              <div className="flex gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="font-body text-sm leading-6 text-text-secondary">
                  {project.team}
                </p>
              </div>
            </MetaBlock>
          )}

          {project.community && (
            <MetaBlock title="Community">
              <p className="font-body text-sm leading-6 text-text-secondary">
                {project.community}
              </p>
            </MetaBlock>
          )}

          {project.deployment && (
            <MetaBlock title="Deployment">
              <div className="flex gap-3">
                <Server className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="font-body text-sm leading-6 text-text-secondary">
                  {project.deployment}
                </p>
              </div>
            </MetaBlock>
          )}

          {project.documentation &&
            project.documentation.length > 0 && (
              <MetaBlock title="Documentation">
                <div className="flex gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                  <ul className="space-y-1">
                    {project.documentation.map((doc) => (
                      <li
                        key={doc}
                        className="font-body text-sm text-text-secondary"
                      >
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </MetaBlock>
            )}
        </div>
      </div>
    </aside>
  );
}