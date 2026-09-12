export interface PriceValue {
  usd: number | null;
  ngn: number | null;
}

export type FixedPriceServiceKey =
  | "portfolioWebsites"
  | "businessWebsites"
  | "landingPages"
  | "brandingKits";

export const PRICING_CONFIG: Record<FixedPriceServiceKey, PriceValue> = {
  portfolioWebsites: { usd: 1000, ngn: 1_000_000 },
  businessWebsites: { usd: 750, ngn: 750_000 },
  landingPages: { usd: 350, ngn: 350_000 },
  brandingKits: { usd: 500, ngn: 500_000 },
};

export {
  CURRENT_AVAILABILITY,
  AVAILABILITY_LABELS,
  BOOKING_LINKS,
  type AvailabilityStatus,
} from "@/components/shared/booking/booking.config";