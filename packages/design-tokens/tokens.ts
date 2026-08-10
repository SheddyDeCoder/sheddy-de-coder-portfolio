export const colors = {
  background: { dark: "#121212", light: "#FFFFFF" },
  surface: { dark: "#1A1A1A", light: "#F8F8F8" },
  primary: "#D4AF37",
  secondary: "#C9A227",
  text: {
    primaryDark: "#FFFFFF",
    secondaryDark: "#A1A1AA",
    primaryLight: "#121212",
    secondaryLight: "#52525B",
  },
  border: {
    dark: "rgba(212,175,55,0.18)",
    light: "#E5E7EB",
  },
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
} as const;

export const fonts = {
  display: "var(--font-display)",
  heading: "var(--font-display)",
  body: "var(--font-body)",
  code: "var(--font-code)",
} as const;

export const spacing = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4.5rem",
} as const;

export const radius = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(0,0,0,0.06)",
  md: "0 4px 12px rgba(0,0,0,0.10)",
  lg: "0 12px 32px rgba(0,0,0,0.14)",
  glow: "0 0 24px rgba(212,175,55,0.25)",
} as const;