import { SPEAKING_HIGHLIGHTS } from "./trust-social-proof.constants";

export function SpeakingHighlights() {
  if (SPEAKING_HIGHLIGHTS.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {SPEAKING_HIGHLIGHTS.map((event) => (
        <div
          key={event.eventName}
          className="rounded-lg border border-border bg-surface/40 p-4"
        >
          <p className="font-display text-sm font-semibold text-text-primary">
            {event.eventName}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondary">
            {event.topic} — {event.location}, {event.year}
          </p>
        </div>
      ))}
    </div>
  );
}