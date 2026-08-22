import { WHY_WORK_WITH_ME } from "./work-with-me.constants";

export function WhyWorkWithMe() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {WHY_WORK_WITH_ME.map((item) => (
        <div
          key={item.title}
          className="rounded-lg border border-border bg-surface/30 p-4"
        >
          <h4 className="font-display text-sm font-semibold text-text-primary">
            {item.title}
          </h4>
          <p className="mt-1 font-body text-xs text-text-secondary">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}