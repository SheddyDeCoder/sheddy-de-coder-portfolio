import type { CaseStudy, LearningProject } from "./projects.types";

const CONFIRMED_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Prisma",
  "Node.js",
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "eimb",
    title: "EIMB",
    category: "featured",
    industry: "FinTech",
    status: "In Progress",
    role: [
      "Founder",
      "Product Designer",
      "UI Designer",
      "Frontend Developer",
      "Backend Developer",
      "System Architect",
      "Sole Developer",
    ],
    isRealProduct: false,
    overview:
      "EIMB (Electronic Internet Mobile Bank) is an educational digital banking simulation built to demonstrate how modern banking systems work. It was created primarily as a learning and teaching tool — helping students, aspiring developers, and technology enthusiasts understand how digital banking platforms operate behind the scenes. It is not connected to real banking infrastructure and does not process real funds.",
    whyBuilt:
      "Many people use banking apps every day without understanding how authentication, transfers, account generation, saving systems, referrals, and user management work internally. Rather than simply explaining these concepts, I wanted to build a working simulation that demonstrates the complete experience — and to show future employers, founders, and collaborators my technical direction and product-thinking process.",
    problem:
      "Learning resources often explain banking systems theoretically without showing how the complete application works. Most beginners never get the opportunity to explore the architecture of a digital banking platform.",
    solution:
      "A complete banking simulation covering authentication, user onboarding, generated account numbers, internal transfers, saving plans, a referral system, a user dashboard, an admin dashboard, and core banking workflows — without connecting to real banking infrastructure.",
    challenges:
      "Implementing a secure authentication architecture and designing realistic banking workflows. Additional production features such as email verification (Resend) are still planned.",
    currentFeatures: [
      "Authentication",
      "Dashboard",
      "Account generation",
      "Saving plans",
      "Referral system",
      "Simulated debit card",
      "Transfers",
      "Admin dashboard",
    ],
    plannedFeatures: [
      "Email verification",
      "Production polish",
      "Improved security",
      "Additional banking modules",
    ],
    outcome:
      "The project demonstrates a working understanding of fintech architecture, authentication, modern frontend/backend development, and product thinking — and serves as a practical educational resource for anyone trying to understand how digital banking platforms work.",
    targetAudience: [
      "Students",
      "Developers",
      "Recruiters",
      "FinTech companies",
      "Startup founders",
      "Technical collaborators",
    ],
    technologies: [...CONFIRMED_STACK],
    repository: { type: "public", url: null },
    liveUrl: null,
    relatedSlugs: ["p2p-pay"],
  },
  {
    slug: "p2p-pay",
    title: "P2P Pay",
    category: "featured",
    industry: "FinTech / Cryptocurrency",
    status: "Mock MVP Completed — Production Platform Under Research",
    role: [
      "Co-Founder",
      "Chief Technology Officer (CTO)",
      "Project Manager",
      "Frontend Contributor",
      "Product Strategy",
    ],
    isRealProduct: true,
    overview:
      "P2P Pay is a peer-to-peer cryptocurrency exchange platform being developed as a real startup. The version shown here is a functional mock application built to validate the product idea, demonstrate technical capability, and support future fundraising and product development. The production version — including blockchain implementation — is currently under market research and technical planning.",
    whyBuilt:
      "Before investing significant resources into blockchain development, we wanted to validate the product concept through a working prototype. The mock platform demonstrates product vision, user experience, platform architecture, technical capability, and team execution.",
    problem:
      "Peer-to-peer cryptocurrency trading remains fragmented and difficult for many users. The project aims to simplify digital asset exchange while preparing for a scalable production platform.",
    solution:
      "A mock MVP that accurately simulates the future user experience while the production blockchain infrastructure is being prepared.",
    team: "Developed collaboratively with members of TechMindsVerse — CEO/Business Strategy, CTO (Shedrack Nliam), a Frontend Developer, and a Backend Developer.",
    community:
      "An active Telegram community of over 2,000 members currently performs manual peer-to-peer cryptocurrency transactions — early market validation for the platform.",
    contributions: [
      "Product architecture",
      "Technical leadership",
      "Sprint planning",
      "Frontend development",
      "Team coordination",
      "Project management",
    ],
    challenges:
      "Managing development across multiple contributors while maintaining a consistent technical vision and product architecture.",
    outcome:
      "Successfully delivered a working mock application alongside supporting documentation, research, and investor materials that will guide production development.",
    roadmap: [
      "Blockchain integration",
      "Smart contracts",
      "Wallet infrastructure",
      "Escrow system",
      "Production backend",
      "Mobile applications",
      "Regulatory compliance",
    ],
    technologies: [...CONFIRMED_STACK.filter((t) => t !== "Prisma")],
    repository: { type: null, url: null },
    liveUrl: null,
    relatedSlugs: ["eimb"],
  },
  {
    slug: "techmindsverse-os",
    title: "TechMindsVerse OS",
    category: "featured",
    status: "In Progress",
    role: ["Founder", "Product Designer", "Frontend Developer", "System Architect"],
    isRealProduct: true,
    overview:
      "TechMindsVerse OS is the flagship platform of TechMindsVerse. It was inspired by real problems experienced while working with clients — many wanted visibility into how their projects were progressing rather than waiting until completion. TechMindsVerse OS is designed to provide transparency, collaboration, and management across the whole TechMindsVerse ecosystem.",
    problem:
      "Clients often want to know: what stage is my project at, what's been completed, what's happening now, and what comes next? Students need visibility into their learning journey. Mentors need management tools. The community needs a central place for updates.",
    solution:
      "A centralized operating system that lets different types of users manage and monitor their own journey within the ecosystem.",
    coreModules: [
      {
        name: "Client Dashboard",
        points: ["Request a build", "Monitor project progress", "Track development updates"],
      },
      {
        name: "Academy",
        points: [
          "Students monitor learning progress and view their dashboard",
          "Mentors manage students and track learning",
          "Admins manage the platform",
        ],
      },
      {
        name: "Community",
        points: [
          "A space for builders, founders, students, and members",
          "Updates, announcements, events, and ecosystem news",
        ],
      },
    ],
    futureVision:
      "Future AI functionality is planned to make the platform more intelligent and improve communication and user experience. This is planned, not currently implemented.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    repository: { type: "public", url: null },
    liveUrl: null,
    deployment: "Deployed on Vercel",
    documentation: ["README available", "Architecture documented"],
    relatedSlugs: ["pbos", "eimb"],
  },
  {
    slug: "pbos",
    title: "Personal Brand Operating System (PBOS)",
    category: "featured",
    status: "Under Active Development",
    role: ["Founder", "Product Owner", "Developer", "Brand Strategist"],
    isRealProduct: true,
    overview:
      "The Personal Brand Operating System (PBOS) is the strategic foundation behind my personal brand. Rather than building a website first, I created an extensive PBOS document that defines every major aspect of my brand — and the website you're looking at right now was built around that strategy. This project demonstrates how strategy informs implementation.",
    solution:
      "A comprehensive brand operating system covering brand identity, positioning, messaging, design tokens, visual system, brand principles, CTA strategy, content strategy, personal positioning, portfolio structure, and brand architecture — with the website serving as its live implementation.",
    plannedFeatures: [
      "Admin dashboard",
      "Editable pages",
      "Content management",
      "Additional automation",
    ],
    outcome:
      "This website — the portfolio, digital headquarters, authority platform, and source of truth you're currently browsing — is the direct result of this project.",
    documentation: ["PBOS Master Specification (PDF)"],
    repository: { type: null, url: null },
    liveUrl: null,
    relatedSlugs: ["techmindsverse-os"],
  },
  {
    slug: "growthgia",
    title: "GrowthGia",
    category: "startup-collaboration",
    industry: "Logistics / E-commerce Enablement",
    role: ["Frontend Developer"],
    isRealProduct: true,
    overview:
      "GrowthGia is a logistics startup focused on helping businesses sell products online through digital storefronts and unique links that simplify selling. This case study focuses on my contribution as a frontend developer, not GrowthGia's full business model — visit the official platform to learn more about GrowthGia itself.",
    contributions: [
      "Implemented UI/UX designs created by the project's UI/UX designers into responsive frontend interfaces",
      "Did not create the UI/UX designs — translated approved designs into working web pages",
    ],
    pagesBuilt: ["Landing / Home Page", "Blog Page", "Contact Page", "Merchant Page"],
    team: "GrowthGia was developed collaboratively across multiple developers. Other frontend developers implemented the remaining pages, and the core application was built by other members of the team.",
    outcome:
      "This project demonstrates the ability to work within an existing product, collaborate with other developers, implement designs accurately, and deliver production-ready frontend interfaces.",
    technologies: null,
    repository: { type: null, url: null },
    liveUrl: null,
  },
  {
    slug: "kenlight-mercy",
    title: "Kenlight Mercy Portfolio",
    category: "client",
    status: "Completed",
    role: ["Frontend Developer"],
    isRealProduct: true,
    overview:
      "A professional portfolio website built for a client — Kenlight Mercy. This project demonstrates the ability to understand client requirements and deliver a responsive, production-ready website. Unlike the founder-led products above, this was a client deliverable focused on performance, responsiveness, and personal branding.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    repository: { type: null, url: null },
    liveUrl: null,
  },
];

export const LEARNING_PROJECTS: LearningProject[] = [
  {
    name: "Profile Generator",
    purpose: ["Practice API integration", "Learn fetching external data"],
    repository: null,
  },
  {
    name: "Motivate (Quote Generator)",
    purpose: ["Practice frontend logic", "Generate motivational quotes"],
    repository: null,
  },
  {
    name: "Personal Portfolio Website (Learning Project)",
    purpose: [
      "Learn complete portfolio development",
      "Practice component architecture",
      "Integrate external services",
    ],
    integrations: ["Formspree", "Slider.js"],
    repository: null,
  },
  {
    name: "DevMe",
    purpose: ["Small developer profile application", "Practice frontend development", "Showcase technology stack"],
    repository: null,
  },
  {
    name: "Mini Blog",
    purpose: ["Practice blog architecture", "Content rendering", "Frontend development"],
    repository: null,
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  featured: "Featured Products",
  "startup-collaboration": "Startup & Team Contributions",
  client: "Client Projects",
};