const { colors, fonts, spacing, radius, shadows } = require("./tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: colors.background,
        surface: colors.surface,
        card: colors.card,
        primary: colors.primary,
        primaryHover: colors.primaryHover,
        primaryActive: colors.primaryActive,
        primarySoft: colors.primarySoft,
        border: colors.border,
        divider: colors.divider,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
        text: colors.text,
        brand: colors.brand,
        neutral: colors.neutral,
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