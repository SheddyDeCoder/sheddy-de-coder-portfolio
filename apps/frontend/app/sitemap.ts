import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo/site-config";
import { CASE_STUDIES } from "@/components/pages/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/techmindsverse",
    "/work-with-me",
    "/contact",
  ].map((path) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = CASE_STUDIES.map((project) => ({
    url: `${SITE_CONFIG.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}