export function ServiceCard({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface/40 px-4 py-3 font-body text-sm text-text-secondaryDark transition-colors hover:border-primary/40 hover:text-primary">
      {title}
    </div>
  );
}