import type { Project } from "./featured-projects.types";

export const FLAGSHIP_AND_CLIENT_PROJECTS: Project[] = [
  {
    slug: "eimb",
    name: "EIMB",
    isFlagship: true,
    category: "Fintech",
    status: "In Progress",
    role: "Founder, Product Designer & Full-Stack Developer",
    description:
      "A modern digital banking simulation built to demonstrate secure fintech experiences, realistic banking workflows, and production-grade application architecture.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Node.js",
    ],
    coverImage: "/images/projects/eimb/cover.webp",
  },
  {
    slug: "techmindsverse-os",
    name: "TechMindsVerse OS",
    isFlagship: true,
    category: "SaaS / Platform",
    status: "In Progress",
    role: "Founder, Product Architect & Full-Stack Developer",
    description:
      "The operating system for the TechMindsVerse ecosystem, combining Build Studio, Academy, and Community into one platform that helps founders build products, learn practical skills, and collaborate.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    coverImage: "/images/projects/techmindsverse-os/cover.webp",
  },
  {
    slug: "p2p-pay",
    name: "P2P Pay",
    isFlagship: true,
    category: "Fintech",
    status: "In Progress",
    role: "Co-Founder & Full-Stack Developer",
    description:
      "A peer-to-peer cryptocurrency trading platform prototype designed to simplify secure digital asset exchange.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    coverImage: "/images/projects/p2p-pay/cover.webp",
  },
  {
    slug: "kenlight-mercy-portfolio",
    name: "Kenlight Mercy Portfolio",
    isFlagship: false,
    category: "Client Project",
    status: "Completed",
    role: "Frontend Developer",
    description:
      "A professional portfolio website developed for a client with a focus on performance, responsiveness, and personal branding.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: "/images/projects/kenlight-mercy-portfolio/cover.webp",
  },
];

// Populated later — selected projects from the 30 Days of Coding challenge.
// Kept as its own category and array per your instruction: never mixed
// with flagship/client work.
export const LEARNING_ARCHIVE_PROJECTS: Project[] = [];