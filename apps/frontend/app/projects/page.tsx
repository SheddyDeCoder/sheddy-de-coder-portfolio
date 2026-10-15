import type { Metadata } from "next";
import { ProjectsListing, LearningProjectsSection } from "@/components/pages/projects";


export const metadata: Metadata = {
  title: "Projects & Selected Work",

  description:
    "Explore websites, digital products, startup projects, and client work by Shedrack Nliam (Sheddy De Coder), including TechMindsVerse OS, EIMB, and P2P Pay.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projects & Selected Work | Sheddy De Coder",
    description:
      "A collection of websites, digital products, founder-led projects, and client solutions built or developed by Shedrack Nliam.",
    url: "/projects",
    type: "website",
  },
};


export default function ProjectsPage() {
  return (
    <>
      <ProjectsListing />
      <LearningProjectsSection />
    </>
  );
}