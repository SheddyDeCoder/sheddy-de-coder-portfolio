import type { Metadata } from "next";
import {
  WorkWithMeHero,
  FixedPriceServices,
  ServiceCategoryGrid,
  ServiceProcess,
  MentorshipCTA,
  BookACallPanel,
} from "@/components/pages/work-with-me";
import {
  CUSTOM_QUOTE_SERVICES,
  MEDIA_SERVICES,
  CHURCH_SERVICES,
} from "@/components/pages/work-with-me/work-with-me.constants";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Technology Founder, Product Builder, and Digital Strategist — services in technology, media, and digital strategy.",
};

export default function WorkWithMePage() {
  return (
    <>
      <WorkWithMeHero />
      <FixedPriceServices />
      <ServiceCategoryGrid title="Custom Quote Services" services={CUSTOM_QUOTE_SERVICES} />
      <ServiceCategoryGrid title="Media & Creative Services" services={MEDIA_SERVICES} />
      <ServiceCategoryGrid title="Church & Ministry Solutions" services={CHURCH_SERVICES} />
      <ServiceProcess />
      <MentorshipCTA />
      <BookACallPanel />
    </>
  );
}