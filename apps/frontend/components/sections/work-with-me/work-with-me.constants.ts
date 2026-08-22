export const WORK_WITH_ME_INTRO = {
  heading: "Let's Build Something Meaningful Together",
  body: "Whether you're launching a startup, building your online presence, designing a digital product, or looking for a technology partner, I help transform ideas into meaningful digital experiences.",
  primaryCta: { label: "Book a Call", href: "/contact" },
} as const;

export const SERVICES: string[] = [
  "Portfolio Websites",
  "Business Websites",
  "Landing Pages",
  "Brand Identity & Social Media Setup",
  "UI / UX Design",
  "Custom Web Applications",
  "Startup Product Development",
  "Technical Consulting",
  "Technology Strategy",
  "Speaking Engagements",
  "Mentorship",
  "Community Collaboration",
];

export const FEATURED_SERVICE = {
  title: "Startup Product Development",
  description:
    "Helping founders transform ideas into scalable digital products through strategy, design and engineering.",
} as const;

export const SPEAKING_PREVIEW = {
  title: "Technology Talks & Speaking",
  body: "Available for conferences, schools, universities, startups, innovation hubs and community events.",
  cta: { label: "Invite Me to Speak", href: "/contact" },
} as const;

export const MENTORSHIP_PREVIEW = {
  description:
    "Guiding aspiring developers, founders and technology enthusiasts through practical learning, product thinking and career growth.",
  cta: { label: "Request Mentorship", href: "/contact" },
} as const;

export const BRANDING_SERVICE = {
  title: "Brand Identity & Digital Presence",
  includes: [
    "Logo Direction",
    "Website Setup",
    "Portfolio Setup",
    "LinkedIn Optimization",
    "Professional Social Media Setup",
    "Personal Branding Strategy",
  ],
} as const;

// Real figures not yet provided — renders nothing until confirmed.
export const PRICING_PREVIEW: { service: string; value: string | null }[] = [
  { service: "Portfolio Website", value: null },
  { service: "Landing Page", value: null },
  { service: "Mentorship", value: null },
  { service: "Speaking", value: "Contact for Pricing" },
  { service: "Technical Consulting", value: "Contact for Pricing" },
];

export const WHY_WORK_WITH_ME: { title: string; description: string }[] = [
  {
    title: "Founder Perspective",
    description: "Building products beyond writing code.",
  },
  {
    title: "Quality Engineering",
    description: "Scalable, maintainable solutions.",
  },
  {
    title: "Brand Thinking",
    description: "Technology combined with strong branding.",
  },
  {
    title: "Community Driven",
    description: "Committed to long-term impact.",
  },
  {
    title: "Future Focused",
    description: "Building with scalability in mind.",
  },
];

export const DIGITAL_GROWTH_SERVICES = [
  "Content Strategy",
  "Digital Visibility",
  "Social Media Growth",
  "Organic Growth Strategies",
  "Audience Growth",
  "Content Calendars",
  "SEO Fundamentals",
  "Brand Positioning",
  "Online Visibility Consulting",
] as const;

export const BRANDING_SERVICES = [
  "Logos",
  "Brand Assets",
  "Flyers",
  "Event Graphics",
  "Church Graphics",
  "Presentation Slides",
  "Social Media Creatives",
  "Marketing Designs",
] as const;

export const TOOLS_INVENTORY = {
  Development: ["VS Code", "Git", "GitHub", "Postman", "Supabase", "Prisma", "Vercel", "Render", "npm", "Trello", "Notion"],
  Design: ["Canva", "PixelLab", "Figma"],
  Media: ["CapCut", "OBS", "EasyWorship"],
  Productivity: ["Google Workspace", "Microsoft Office", "Google Drive", "Google Docs", "Google Sheets", "Google Slides"],
  AI: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity", "FLUX", "Nano Banana", "Canva AI", "CapCut AI"],
} as const;

export const FUTURE_RESOURCES = [
  "AI Prompts",
  "Content Calendar Prompts",
  "Image Generation Prompts",
  "Studio Portrait Prompts",
  "Branding Templates",
  "Website Planning Templates",
  "Startup Documentation Templates",
  "Church Media Resources",
] as const;

export const MEDIA_SERVICES = [
  "Event Coverage",
  "Video Production",
  "Photography",
  "Drone Coverage",
  "Livestream Production",
  "Video Editing",
  "Content Production",
  "Creative Direction",
  "Church Media Support",
  "Projection & Presentation Systems",
] as const;