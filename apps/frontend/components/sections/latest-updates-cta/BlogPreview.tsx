// BlogPreview.tsx
import { div } from "framer-motion/m";
import { FEATURED_ARTICLES } from "./latest-updates-cta.constants";

export function BlogPreview() {
  if (FEATURED_ARTICLES.length === 0) return null;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {FEATURED_ARTICLES.map((article) => (
        <a
          key={article.title}
          href={article.url}
          className="rounded-lg border border-border bg-surface/40 p-4 hover:border-primary/40"
        >
          {article.title}
        </a>
      ))}
    </div>
  );
}