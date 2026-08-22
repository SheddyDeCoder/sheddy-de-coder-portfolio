import Link from "next/link";
import { Button } from "@sheddy/ui";

export function ComingSoon({ title }: { title: string }) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-2xl font-bold text-text-primary md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 font-body text-sm text-text-secondary md:text-base">
        This page is being built as part of the SHEDDY DE CODER platform.
        Check back soon.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </section>
  );
}