// EDITABLE CONFIG — pricing, availability, and booking links live here ONLY.
// No component should ever hardcode these values directly.

export const PRICING_CONFIG = {
  portfolioWebsites: null,
  businessWebsites: null,
  landingPages: null,
  brandingKits: null,
} as const;

export type FixedPriceServiceKey = keyof typeof PRICING_CONFIG;

export type AvailabilityStatus = "available" | "limited" | "fully-booked";

export const CURRENT_AVAILABILITY: AvailabilityStatus = "limited";

export const AVAILABILITY_LABELS: Record<AvailabilityStatus, string> = {
  available: "Available for New Projects",
  limited: "Available for Selected Projects",
  "fully-booked": "Fully Booked",
};

// Set each to a real URL when ready — components read this automatically,
// no edits needed elsewhere.
export const BOOKING_LINKS: {
  scheduler: string | null;
  whatsapp: string | null;
  contactForm: string | null;
} = {
  scheduler: null,
  whatsapp: null,
  contactForm: null,
};