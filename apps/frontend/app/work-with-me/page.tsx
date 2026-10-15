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
  title: "Work With Me | Websites, SEO & Digital Solutions",

  description:
    "Work with Shedrack Nliam (Sheddy De Coder) to build professional websites and digital solutions, improve SEO and online visibility, and simplify business workflows through practical automation.",

  alternates: {
    canonical: "/work-with-me",
  },

  openGraph: {
    title:
      "Work With Me | Websites, SEO & Digital Solutions",
    description:
      "Helping founders, executives, and businesses build digital solutions, grow online visibility, and automate repetitive workflows.",
    url: "/work-with-me",
    type: "website",
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