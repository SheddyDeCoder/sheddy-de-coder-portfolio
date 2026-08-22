export const PRICING_CONFIG = {
  portfolioWebsites: null,
  businessWebsites: null,
  landingPages: null,
  brandingKits: null,
} as const;

export type FixedPriceServiceKey = keyof typeof PRICING_CONFIG;

// Booking/availability now live in the shared config — re-exported here
// so existing imports in this feature's components keep working.
export {
  CURRENT_AVAILABILITY,
  AVAILABILITY_LABELS,
  BOOKING_LINKS,
  type AvailabilityStatus,
} from "@/components/shared/booking/booking.config";