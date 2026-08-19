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
] as const;

export const CHURCH_SERVICES = [
  "Church Websites",
  "Media Systems",
  "Livestream Setup",
  "Technical Consulting",
  "Digital Growth Strategy",
  "Branding Support",
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