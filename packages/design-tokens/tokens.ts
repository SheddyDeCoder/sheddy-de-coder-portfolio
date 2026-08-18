export const colors = {
  // Brand tokens — stable across both themes, per Section 07's theme-architecture rule
  brand: {
    red: "#C1121F",
    redHover: "#A50F1B",
    redActive: "#870C16",
    redSoft: "#FDE8EA",
    white: "#FFFFFF",
    black: "#121212",
  },

  // Full neutral scale — centralized, never scattered in components
  neutral: {
    950: "#121212",
    900: "#1B1B1B",
    800: "#2B2B2B",
    700: "#404040",
    600: "#5F5F5F",
    500: "#737373",
    400: "#A1A1A1",
    300: "#D4D4D4",
    200: "#E5E5E5",
    100: "#F5F5F5",
    50: "#FAFAFA",
    white: "#FFFFFF",
  },

  // Theme-dependent surface/text/border tokens — these are what actually change per theme
  background: { dark: "#121212", light: "#FFFFFF" },
  surface: { dark: "#1B1B1B", light: "#FAFAFA" },
  card: { dark: "#1B1B1B", light: "#FFFFFF" },
  primary: "#C1121F",
  primaryHover: "#A50F1B",
  primaryActive: "#870C16",
  primarySoft: "#FDE8EA",
  text: {
    primaryDark: "#FFFFFF",
    secondaryDark: "#D4D4D4",
    mutedDark: "#A1A1A1",
    primaryLight: "#121212",
    secondaryLight: "#404040",
    mutedLight: "#737373",
  },
  border: {
    dark: "#2B2B2B",
    light: "#E5E5E5",
  },
  divider: {
    dark: "#2B2B2B",
    light: "#F1F1F1",
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
  glow: "0 0 24px rgba(193,18,31,0.20)",
} as const;