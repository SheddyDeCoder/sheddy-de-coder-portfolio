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