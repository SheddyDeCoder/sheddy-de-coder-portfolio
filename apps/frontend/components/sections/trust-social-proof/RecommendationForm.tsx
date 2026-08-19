"use client";

import { Button } from "@sheddy/ui";

// TODO (Backend Phase): wire this form to the dashboard-approval workflow
// defined in PBOS Section 6.89 — submissions stored, then admin-approved
// before publishing. No backend/API exists yet, so this form does not
// submit anywhere. UI structure only.
export function RecommendationForm() {
  return (
    <form className="mx-auto flex max-w-lg flex-col gap-4 rounded-xl border border-border bg-surface/40 p-6">
      <h3 className="font-display text-lg font-semibold text-text-primaryDark">
        Write a Recommendation
      </h3>
      <input
        type="text"
        placeholder="Full Name"
        className="rounded-md border border-border bg-background px-3 py-2 font-body text-sm text-text-primaryDark"
        disabled
      />
      <input
        type="email"
        placeholder="Email Address"
        className="rounded-md border border-border bg-background px-3 py-2 font-body text-sm text-text-primaryDark"
        disabled
      />
      <input
        type="text"
        placeholder="Position"
        className="rounded-md border border-border bg-background px-3 py-2 font-body text-sm text-text-primaryDark"
        disabled
      />
      <input
        id="newsletter-email"
        name="email"
        type="text"
        placeholder="Company / Organization"
        className="rounded-md border border-border bg-background px-3 py-2 font-body text-sm text-text-primaryDark"
        disabled
      />
      <textarea
        placeholder="Recommendation Message"
        rows={4}
        className="rounded-md border border-border bg-background px-3 py-2 font-body text-sm text-text-primaryDark"
        disabled
      />
      <Button disabled>Submit (coming soon)</Button>
    </form>
  );
}