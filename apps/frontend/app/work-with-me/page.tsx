import type { Metadata } from "next";

import {
  WorkWithMeHero,
  BuildGrowSection,
  FixedPriceServices,
  ServiceProcess,
  SelectedWork,
  WhoIWorkWith,
  SupportingCapabilities,
} from "@/components/pages/work-with-me";
import { BookACallPanel } from "@/components/shared/booking";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Technology, product development, and digital visibility services for founders, startups, businesses, and personal brands. Based in Nigeria, open to remote collaboration worldwide.",
  alternates: { canonical: "/work-with-me" },
  openGraph: {
    title: "Work With Me — Technology, Product Development & Digital Visibility",
    description:
      "Build useful digital products and improve digital visibility through product development, web development, SEO, and search visibility.",
  },
};

export default function WorkWithMePage() {
  return (
    <>
      <WorkWithMeHero />
      <BuildGrowSection />
      <FixedPriceServices />
      <ServiceProcess />
      <SelectedWork />
      <WhoIWorkWith />
      <SupportingCapabilities />
      <BookACallPanel location="Work With Me page" />
    </>
  );
}