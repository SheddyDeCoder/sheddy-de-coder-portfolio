import { RECOMMENDATIONS } from "./trust-social-proof.constants";

export function RecommendationsList() {
  if (RECOMMENDATIONS.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {RECOMMENDATIONS.map((rec) => (
        <blockquote
          key={rec.name}
          className="rounded-xl border border-border bg-surface/40 p-6"
        >
          <p className="font-body text-sm text-text-secondary">
            “{rec.message}”
          </p>
          <footer className="mt-4 border-t border-border pt-4">
            <p className="font-display text-sm font-semibold text-text-primary">
              {rec.name}
            </p>
            <p className="font-body text-xs text-text-secondary">
              {rec.position}, {rec.organization}
            </p>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}