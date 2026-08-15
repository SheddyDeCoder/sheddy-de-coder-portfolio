// UpcomingEvents.tsx
import { UPCOMING_EVENTS } from "./latest-updates-cta.constants";

export function UpcomingEvents() {
  if (UPCOMING_EVENTS.length === 0) return null;
  return (
    <div className="flex flex-col gap-3">
      {UPCOMING_EVENTS.map((event) => (
        <div
          key={event.title}
          className="rounded-lg border border-border bg-surface/40 p-4"
        >
          <p className="font-display text-sm font-semibold text-text-primaryDark">
            {event.title}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondaryDark">
            {event.date} — {event.location}
          </p>
        </div>
      ))}
    </div>
  );
}