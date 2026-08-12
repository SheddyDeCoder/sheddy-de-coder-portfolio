"use client";

import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}