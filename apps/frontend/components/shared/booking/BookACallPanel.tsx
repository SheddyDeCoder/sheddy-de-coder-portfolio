"use client";

import Link from "next/link";
import { Calendar, MessageCircle, Mail } from "lucide-react";
import { BOOKING_LINKS } from "./booking.config";
import { SITE_CONFIG } from "@/lib/seo/site-config";

const OPTIONS = [
  { key: "scheduler" as const, label: "Schedule a Call", icon: Calendar },
  { key: "whatsapp" as const, label: "Message on WhatsApp", icon: MessageCircle },
  { key: "contactForm" as const, label: "Send a Message", icon: Mail },
];

export function BookACallPanel() {
  const anyLinkAvailable = Object.values(BOOKING_LINKS).some(Boolean);

  if (!anyLinkAvailable) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
          Let's Talk
        </h2>
        <p className="mt-3 font-body text-sm text-text-secondary">
          Reach out directly on{" "}
          <a
            href={SITE_CONFIG.sameAs[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            LinkedIn
          </a>{" "}
          or use the contact form above — I read every message.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Book a Call
      </h2>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        {OPTIONS.filter(({ key }) => BOOKING_LINKS[key]).map(({ key, label, icon: Icon }) => (
          <a
            key={key}
            href={BOOKING_LINKS[key]!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 font-body text-sm font-semibold text-white"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}