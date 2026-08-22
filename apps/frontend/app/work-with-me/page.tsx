import type { Metadata } from "next";
import {
  WorkWithMeHero,
  FixedPriceServices,
  ServiceCategoryGrid,
  ServiceProcess,
  MentorshipCTA,
  ToolsInventory,
  FutureResourcesTeaser,
} from "@/components/pages/work-with-me";
import {
  CUSTOM_QUOTE_SERVICES,
  MEDIA_SERVICES,
  CHURCH_SERVICES,
  DIGITAL_GROWTH_SERVICES,
  BRANDING_SERVICES,
} from "@/components/pages/work-with-me/work-with-me.constants";
import { BookACallPanel } from "@/components/shared/booking";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Technology Founder, Product Builder, and Digital Strategist — services in technology, media, branding, digital growth, and digital strategy.",
};

export default function WorkWithMePage() {
  return (
    <>
      <WorkWithMeHero />
      <FixedPriceServices />
      <ServiceCategoryGrid title="Custom Quote Services" services={CUSTOM_QUOTE_SERVICES} />
      <ServiceCategoryGrid title="Digital Growth" services={DIGITAL_GROWTH_SERVICES} />
      <ServiceCategoryGrid title="Branding & Design" services={BRANDING_SERVICES} />
      <ServiceCategoryGrid title="Media & Creative Services" services={MEDIA_SERVICES} />
      <ServiceCategoryGrid title="Church & Ministry Solutions" services={CHURCH_SERVICES} />
      <ServiceProcess />
      <ToolsInventory />
      <MentorshipCTA />
      <FutureResourcesTeaser />
      <BookACallPanel />
    </>
  );
}