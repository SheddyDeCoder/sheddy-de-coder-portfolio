import Link from "next/link";
import { Button } from "@sheddy/ui";
import { MENTORSHIP_PREVIEW } from "./work-with-me.constants";

export function MentorshipPreview() {
  return (
    <div className="rounded-xl border border-border bg-surface/40 p-6">
      <h3 className="font-display text-lg font-semibold text-text-primary">
        Mentorship
      </h3>
      <p className="mt-2 font-body text-sm text-text-secondary">
        {MENTORSHIP_PREVIEW.description}
      </p>
      <Button asChild variant="outline" className="mt-4">
        <Link href={MENTORSHIP_PREVIEW.cta.href}>
          {MENTORSHIP_PREVIEW.cta.label}
        </Link>
      </Button>
    </div>
  );
}