import { PHILOSOPHY_QUOTE } from "./about-preview.constants";

export function PhilosophyQuote() {
  return (
    <blockquote className="border-l-2 border-primary py-2 pl-6 font-display text-lg italic text-text-primary md:text-xl">
      “{PHILOSOPHY_QUOTE}”
    </blockquote>
  );
}