"use client";

import { Calendar, MessageCircle, Mail } from "lucide-react";
import { BOOKING_LINKS } from "./work-with-me.config";

const OPTIONS = [
  { key: "scheduler" as const, label: "Schedule a Call", icon: Calendar },
  { key: "whatsapp" as const, label: "Message on WhatsApp", icon: MessageCircle },
  { key: "contactForm" as const, label: "Send a Message", icon: Mail },
];

export function BookACallPanel() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primaryDark md:text-3xl">
        Book a Call
      </h2>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        {OPTIONS.map(({ key, label, icon: Icon }) => {
          const url = BOOKING_LINKS[key];
          return url ? (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 font-body text-sm font-semibold text-white"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ) : (
            <button
              key={key}
              disabled
              aria-disabled="true"
              className="flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-body text-sm text-text-secondaryDark opacity-60"
            >
              <Icon className="h-4 w-4" />
              {label} — Coming Soon
            </button>
          );
        })}
      </div>
    </section>
  );
}