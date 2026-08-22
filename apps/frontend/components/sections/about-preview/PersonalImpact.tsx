import { PERSONAL_IMPACT } from "./about-preview.constants";

export function PersonalImpact() {
  if (PERSONAL_IMPACT.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {PERSONAL_IMPACT.map((metric) => (
        <div key={metric.label}>
          <p className="font-display text-2xl font-bold text-primary">
            {metric.value}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondary">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}