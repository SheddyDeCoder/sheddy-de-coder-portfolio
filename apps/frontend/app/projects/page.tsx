import type { Metadata } from "next";
import { ProjectsListing, LearningProjectsSection } from "@/components/pages/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Founder-led products (EIMB, TechMindsVerse OS, P2P Pay), startup collaboration, client work, and learning projects by Shedrack Nliam — Technology Founder and Product Builder.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Sheddy De Coder",
    description:
      "Founder-led products (EIMB, TechMindsVerse OS, P2P Pay), startup collaboration, client work, and learning projects by Shedrack Nliam — Technology Founder and Product Builder.",
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