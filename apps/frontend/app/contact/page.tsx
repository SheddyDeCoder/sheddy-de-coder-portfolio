import type { Metadata } from "next";
import { ContactHero, ContactForm } from "@/components/pages/contact";
import { BookACallPanel } from "@/components/shared/booking";
import { SocialConnection } from "@/components/sections/latest-updates-cta";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — technology, media, and digital strategy.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <BookACallPanel />
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