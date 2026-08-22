import Link from "next/link";
import { Button } from "@sheddy/ui";
import { SPEAKING_PREVIEW } from "./work-with-me.constants";

export function SpeakingPreview() {
  return (
    <div className="rounded-xl border border-border bg-surface/40 p-6">
      <h3 className="font-display text-lg font-semibold text-text-primary">
        {SPEAKING_PREVIEW.title}
      </h3>
      <p className="mt-2 font-body text-sm text-text-secondary">
        {SPEAKING_PREVIEW.body}
      </p>
      <Button asChild variant="outline" className="mt-4">
        <Link href={SPEAKING_PREVIEW.cta.href}>{SPEAKING_PREVIEW.cta.label}</Link>
      </Button>
    </div>
  );
}