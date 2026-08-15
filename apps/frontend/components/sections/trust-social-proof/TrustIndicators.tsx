import { TRUST_INDICATORS } from "./trust-social-proof.constants";

export function TrustIndicators() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {TRUST_INDICATORS.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border px-4 py-1.5 font-body text-xs text-text-secondaryDark"
        >
          {item}
        </span>
      ))}
    </div>
  );
}