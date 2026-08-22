import type { Metadata } from "next";
import { ProjectsListing, LearningProjectsSection } from "@/components/pages/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Founder-led products, startup collaboration, client work, and learning projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsListing />
      <LearningProjectsSection />
    </>
  );
}