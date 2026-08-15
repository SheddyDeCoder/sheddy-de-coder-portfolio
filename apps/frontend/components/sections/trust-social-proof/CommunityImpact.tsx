import { COMMUNITY_IMPACT } from "./trust-social-proof.constants";

export function CommunityImpact() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {COMMUNITY_IMPACT.map((item) => (
        <div key={item.label} className="text-center">
          <p className="font-display text-xl font-bold text-primary">
            {item.value}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondaryDark">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}