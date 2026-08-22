export type ProjectCategory =
  | "featured"
  | "startup-collaboration"
  | "client"
  | "learning";

export type ProjectStatus = string; // e.g. "In Progress", "Mock MVP Completed"

export interface CoreModule {
  name: string;
  points: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: ProjectCategory;
  industry?: string;
  status?: string;
  role: string[];
  isRealProduct: boolean; // false for EIMB — an educational simulation, not a live product
  overview: string;
  whyBuilt?: string;
  problem?: string;
  solution?: string;
  team?: string;
  community?: string;
  contributions?: string[];
  pagesBuilt?: string[];
  coreModules?: CoreModule[];
  currentFeatures?: string[];
  plannedFeatures?: string[];
  futureVision?: string;
  challenges?: string;
  outcome?: string;
  roadmap?: string[];
  targetAudience?: string[];
  technologies?: string[] | null;
  repository: { type: "public" | "private" | null; url: string | null };
  liveUrl?: string | null;
  deployment?: string | null;
  documentation?: string[];
  relatedSlugs?: string[];
}

export interface LearningProject {
  name: string;
  purpose: string[];
  integrations?: string[];
  repository: string | null;
}