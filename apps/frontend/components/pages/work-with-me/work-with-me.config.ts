
export interface PriceValue {
  usd: number | null;
  ngn: number | null;
}

export type FixedPriceServiceKey =
  | "productDevelopment"
  | "webDevelopment"
  | "seoSearchVisibility"
  | "personalBrandWebsites"
  | "landingPages";

export const PRICING_CONFIG: Record<FixedPriceServiceKey, PriceValue> = {
  productDevelopment: {
    usd: 1000,
    ngn: 1_000_000,
  },

  webDevelopment: {
    usd: 500,
    ngn: 500_000,
  },

  seoSearchVisibility: {
    usd: 150,
    ngn: 150_000,
  },

  personalBrandWebsites: {
    usd: 350,
    ngn: 350_000,
  },

  landingPages: {
    usd: 150,
    ngn: 150_000,
  },
};

export {
  CURRENT_AVAILABILITY,
  AVAILABILITY_LABELS,
  BOOKING_LINKS,
  type AvailabilityStatus,
} from "@/components/shared/booking/booking.config";
