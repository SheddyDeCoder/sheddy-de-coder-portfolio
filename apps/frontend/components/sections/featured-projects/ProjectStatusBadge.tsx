import { cn } from "@sheddy/ui";

const STATUS_STYLES: Record<string, string> = {
  Completed: "border-success/40 text-success",
  "In Progress": "border-primary/40 text-primary",
  Planned: "border-text-secondaryDark/40 text-text-secondaryDark",
};

export function ProjectStatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-3 py-1 font-body text-xs font-medium",
        STATUS_STYLES[status]
      )}
    >
      {status}
    </span>
  );
}