import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.legalName,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#C1121F",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}