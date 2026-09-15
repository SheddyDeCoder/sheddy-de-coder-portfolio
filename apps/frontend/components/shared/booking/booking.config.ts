// EDITABLE CONFIG — single source of truth for booking links and contact email.
// Used by both the Work With Me page and the Contact page.

export type AvailabilityStatus = "available" | "limited" | "fully-booked";

export const CURRENT_AVAILABILITY: AvailabilityStatus = "limited";

export const AVAILABILITY_LABELS: Record<AvailabilityStatus, string> = {
  available: "Available for New Projects",
  limited: "Available for Selected Projects",
  "fully-booked": "Fully Booked",
};

export const BOOKING_LINKS: {
  scheduler: string;
  whatsapp: string;
  contactForm: string | null;
} = {
  scheduler: "https://calendly.com/sheddydecoder",
  whatsapp: "whatsapp.shedracknliam.com.ng",
  contactForm: "./contact",
};

export const CONTACT_EMAIL: string | null = null;