import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokenPreset = require("@sheddy/design-tokens/tailwind-preset.js");

const config: Config = {
  presets: [tokenPreset],
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
};

export default config;