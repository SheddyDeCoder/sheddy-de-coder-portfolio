import Link from "next/link";
import { Button } from "@sheddy/ui";
import { TECHMINDSVERSE_PREVIEW } from "./trust-social-proof.constants";

export function TechMindsVersePreview() {
  return (
    <div className="rounded-xl border border-border bg-surface/40 p-8 text-center">
      <h3 className="font-display text-xl font-bold text-text-primary">
        {TECHMINDSVERSE_PREVIEW.heading}
      </h3>
      <p className="mx-auto mt-3 max-w-xl font-body text-sm text-text-secondary">
        {TECHMINDSVERSE_PREVIEW.body}
      </p>
      <p className="mt-4 font-display text-lg font-semibold text-primary">
        {TECHMINDSVERSE_PREVIEW.memberCount}+ members
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Button asChild>
          <Link href={TECHMINDSVERSE_PREVIEW.joinCta.href}>
            {TECHMINDSVERSE_PREVIEW.joinCta.label}
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={TECHMINDSVERSE_PREVIEW.visitCta.href}>
            {TECHMINDSVERSE_PREVIEW.visitCta.label}
          </Link>
        </Button>
      </div>
    </div>
  );
}