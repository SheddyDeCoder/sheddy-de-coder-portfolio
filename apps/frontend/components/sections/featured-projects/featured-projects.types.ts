export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type ProjectCategory =
  | "Fintech"
  | "SaaS / Platform"
  | "Client Project"
  | "Learning Archive";

export interface Project {
  slug: string;
  name: string;
  isFlagship: boolean;
  category: ProjectCategory;
  status: ProjectStatus;
  role: string;
  description: string;
  techStack: string[];
  coverImage: string;
}