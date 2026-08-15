import { LEADERSHIP_HIGHLIGHTS } from "./about-preview.constants";

export function LeadershipHighlights() {
  return (
    <ul className="flex flex-col gap-2">
      {LEADERSHIP_HIGHLIGHTS.map((item) => (
        <li
          key={item}
          className="font-body text-sm text-text-secondaryDark before:mr-2 before:text-primary before:content-['—']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}