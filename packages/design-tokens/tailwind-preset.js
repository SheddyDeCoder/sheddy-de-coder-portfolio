const { colors, fonts, spacing, radius, shadows } = require("./tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: colors.background,
        surface: colors.surface,
        primary: colors.primary,
        secondary: colors.secondary,
        border: colors.border,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
        text: colors.text,
      },
      fontFamily: {
        display: [fonts.display, "sans-serif"],
        body: [fonts.body, "sans-serif"],
        code: [fonts.code, "monospace"],
      },
      spacing,
      borderRadius: radius,
      boxShadow: shadows,
    },
  },
};