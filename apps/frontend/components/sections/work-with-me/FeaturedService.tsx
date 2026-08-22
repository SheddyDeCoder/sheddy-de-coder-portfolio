import Link from "next/link";
import { Button } from "@sheddy/ui";
import { FEATURED_SERVICE } from "./work-with-me.constants";

export function FeaturedService() {
  return (
    <div className="rounded-xl border border-primary/30 bg-surface/60 p-6 md:col-span-2">
      <span className="font-body text-xs uppercase tracking-wide text-primary">
        Featured
      </span>
      <h3 className="mt-2 font-display text-xl font-semibold text-text-primary">
        {FEATURED_SERVICE.title}
      </h3>
      <p className="mt-2 font-body text-sm text-text-secondary">
        {FEATURED_SERVICE.description}
      </p>
      <Button asChild variant="outline" className="mt-4">
        <Link href="/work-with-me">Learn More</Link>
      </Button>
    </div>
  );
}