// LatestUpdatesFeed.tsx
import { LATEST_UPDATES } from "./latest-updates-cta.constants";

export function LatestUpdatesFeed() {
  if (LATEST_UPDATES.length === 0) return null;
  return (
    <div className="flex flex-col gap-4">
      {LATEST_UPDATES.map((update) => (
        <a
          key={update.title}
          href={update.url}
          className="rounded-lg border border-border bg-surface/40 p-4 hover:border-primary/40"
        >
          <p className="font-body text-xs uppercase text-primary">
            {update.platform}
          </p>
          <p className="mt-1 font-display text-sm font-semibold text-text-primaryDark">
            {update.title}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondaryDark">
            {update.description}
          </p>
        </a>
      ))}
    </div>
  );
}