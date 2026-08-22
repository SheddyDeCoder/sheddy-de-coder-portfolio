import Link from "next/link";
import { PRICING_PREVIEW } from "./work-with-me.constants";

export function PricingPreview() {
  const items = PRICING_PREVIEW.filter((item) => item.value !== null);
  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-surface/40 p-6">
      <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
        Pricing
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.service}
            className="flex justify-between font-body text-sm text-text-secondary"
          >
            <span>{item.service}</span>
            <span className="text-primary">{item.value}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/work-with-me"
        className="mt-4 inline-block font-body text-sm text-primary underline underline-offset-4"
      >
        View Full Pricing
      </Link>
    </div>
  );
}