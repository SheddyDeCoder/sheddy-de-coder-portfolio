import type { FixedPriceServiceKey } from "./work-with-me.config";

export const POSITIONING = {
  heading: "Technology Founder. Product Builder. Digital Strategist.",
  body: "I help founders, businesses, brands, startups, and churches grow through technology, media, and digital strategy — not as a freelancer taking on random gigs, but as someone building long-term solutions.",
} as const;

export const PRIMARY_SERVICE = {
  name: "Startup Product Development",
  note: "The flagship service — everything else exists to support founders building real products.",
} as const;

export interface FixedPriceService {
  key: FixedPriceServiceKey;
  title: string;
  description: string | null;
  deliveryTime: string | null;
  idealFor: string | null;
}

export const FIXED_PRICE_SERVICES: FixedPriceService[] = [
  { key: "portfolioWebsites", title: "Portfolio Websites", description: null, deliveryTime: null, idealFor: null },
  { key: "businessWebsites", title: "Business Websites", description: null, deliveryTime: null, idealFor: null },
  { key: "landingPages", title: "Landing Pages", description: null, deliveryTime: null, idealFor: null },
  { key: "brandingKits", title: "Branding Kits", description: null, deliveryTime: null, idealFor: null },
];

export const CUSTOM_QUOTE_SERVICES = [
  "Startup Product Development",
  "Custom Web Applications",
  "SaaS Development",
  "MVP Development",
  "Product Strategy",
  "Technical Consulting",
  "AI & Automation Consulting",
  "Speaking Engagements",
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

export const CHURCH_SERVICES = [
  "Church Websites",
  "Media Systems",
  "Livestream Setup",
  "Technical Consulting",
  "Digital Growth Strategy",
  "Branding Support",
] as const;

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

export const SERVICE_PROCESS = [
  "Discovery Call",
  "Strategy & Planning",
  "Proposal & Agreement",
  "Design",
  "Development",
  "Review & Feedback",
  "Launch",
  "Ongoing Support (optional)",
] as const;

export const MENTORSHIP = {
  heading: "Mentorship",
  description: "Application-based — free or paid depending on the situation.",
  ctaLabel: "Apply for Mentorship",
} as const;

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