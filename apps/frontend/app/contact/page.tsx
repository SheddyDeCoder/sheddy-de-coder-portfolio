import type { Metadata } from "next";
import { ContactHero, ContactForm } from "@/components/pages/contact";
import { BookACallPanel } from "@/components/shared/booking";
import { SocialConnection } from "@/components/sections/latest-updates-cta";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact Shedrack Nliam (Sheddy De Coder) for website development, SEO, digital solutions, business automation, partnerships, speaking, and professional collaborations.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Shedrack Nliam | Sheddy De Coder",
    description:
      "Let's connect about digital solutions, websites, SEO, automation, partnerships, and collaboration opportunities.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <BookACallPanel location="Contact page" />
      <section className="mx-auto max-w-3xl px-6 py-10 text-center">
        <h2 className="font-display text-lg font-semibold text-text-primary">
          Find Me Elsewhere
        </h2>
        <div className="mt-6">
          <SocialConnection />
        </div>
      </section>
    </>
  );
}