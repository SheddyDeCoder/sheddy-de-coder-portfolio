import Link from "next/link";
import { FIXED_PRICE_SERVICES } from "@/components/pages/work-with-me/work-with-me.constants";
import { PRICING_CONFIG } from "@/components/pages/work-with-me/work-with-me.config";

export function PricingPreview() {
  const items = FIXED_PRICE_SERVICES
    .map((service) => ({
      title: service.title,
      price: PRICING_CONFIG[service.key],
    }))
    .filter((item) => item.price.usd !== null || item.price.ngn !== null);

  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-surface/40 p-6">
      <h3 className="mb-4 font-display text-lg font-semibold text-text-primary">
        Pricing
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex justify-between font-body text-sm text-text-secondary"
          >
            <span>{item.title}</span>
            <span className="text-primary">
              {item.price.usd !== null && `$${item.price.usd.toLocaleString()}+`}
              {item.price.usd !== null && item.price.ngn !== null && " / "}
              {item.price.ngn !== null && `₦${item.price.ngn.toLocaleString()}+`}
            </span>
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