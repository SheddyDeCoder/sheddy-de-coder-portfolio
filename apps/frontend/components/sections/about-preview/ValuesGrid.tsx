import { CORE_VALUES } from "./about-preview.constants";

export function ValuesGrid() {
  return (
    <div className="flex flex-wrap gap-2">
      {CORE_VALUES.map((value) => (
        <span
          key={value}
          className="rounded-md border border-border bg-surface/40 px-3 py-1.5 font-body text-xs text-text-secondaryDark"
        >
          {value}
        </span>
      ))}
    </div>
  );
}