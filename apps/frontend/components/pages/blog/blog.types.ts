export type ContentType =
  | "article"
  | "build-in-public"
  | "project-update"
  | "educational"
  | "resource"
  | "video"
  | "repost";

export type BlogCategory =
  | "Technology"
  | "AI"
  | "Web Development"
  | "Startups"
  | "Leadership"
  | "Community Updates"
  | "TechMindsVerse"
  | "Personal Journey";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  contentType: ContentType;
  tags: string[];
  coverImage: string | null;
  publishedDate: string; // ISO date
  modifiedDate?: string;
  readingTimeMinutes: number;
  author: string;
  content: string; // markdown or rich text — future backend will populate
  featured: boolean;
  externalUrl?: string; // for reposts/curated content pointing elsewhere
}