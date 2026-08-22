import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CASE_STUDIES,
  CaseStudyHero,
  CaseStudySection,
  CaseStudyList,
  CaseStudySidebar,
} from "@/components/pages/projects";

export function generateStaticParams() {
  return CASE_STUDIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.overview };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = CASE_STUDIES.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <CaseStudyHero project={project} />
      <CaseStudySection title="Why I Built It" content={project.whyBuilt} />
      <CaseStudySection title="The Problem" content={project.problem} />
      <CaseStudySection title="The Solution" content={project.solution} />
      {project.coreModules?.map((mod) => (
        <CaseStudyList key={mod.name} title={mod.name} items={mod.points} />
      ))}
      <CaseStudyList title="My Contributions" items={project.contributions} />
      <CaseStudyList title="Pages Built" items={project.pagesBuilt} />
      <CaseStudyList title="Current Features" items={project.currentFeatures} />
      <CaseStudySection title="Future Vision" content={project.futureVision} />
      <CaseStudyList title="Planned Features" items={project.plannedFeatures} />
      <CaseStudySection title="Challenges" content={project.challenges} />
      <CaseStudySection title="Outcome" content={project.outcome} />
      <CaseStudyList title="Roadmap" items={project.roadmap} />
      <CaseStudyList title="Target Audience" items={project.targetAudience} />
      <CaseStudySidebar project={project} />
    </>
  );
}