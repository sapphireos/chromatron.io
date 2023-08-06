import type { Config } from "tailwindcss";
import baseTheme from "./app/theme";

const theme = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: baseTheme,
  plugins: [],
} satisfies Config;

export default theme;
