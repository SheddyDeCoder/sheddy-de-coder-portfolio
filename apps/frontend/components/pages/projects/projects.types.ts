export type ProjectCategory =
  | "featured"
  | "startup-collaboration"
  | "client"
  | "learning";

export type ProjectStatus = string;

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

  isRealProduct: boolean;

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

  repository: {
    type: "public" | "private" | null;
    url: string | null;
  };

  liveUrl?: string | null;

  deployment?: string | null;
  documentation?: string[];

  relatedSlugs?: string[];

  gallery?: GalleryImage[];
  coverImage?: string;
  
  
}

export interface LearningProject {
  name: string;
  purpose: string[];
  integrations?: string[];
  repository: string | null;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}