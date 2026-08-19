"use client";

import { Button } from "@sheddy/ui";
import { NEWSLETTER } from "./latest-updates-cta.constants";

// TODO (Backend Phase): wire to newsletter subscription service.
// No backend/API exists yet — form is structural only.
export function NewsletterSignup() {
  return (
    <div className="mx-auto max-w-md text-center">
      <h3 className="font-display text-xl font-semibold text-text-primaryDark">
        {NEWSLETTER.heading}
      </h3>
      <p className="mt-2 font-body text-sm text-text-secondaryDark">
        {NEWSLETTER.body}
      </p>
      <form className="mt-4 flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Email Address"
          disabled
          className="flex-1 rounded-md border border-border bg-background px-3 py-2 font-body text-sm text-text-primaryDark"
        />
        <Button disabled>Subscribe</Button>
      </form>
      <p className="mt-2 font-body text-xs text-text-secondaryDark">
        {NEWSLETTER.privacyNotice}
      </p>
    </div>
  );
}