import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";

import { green, purple, red, gray } from "./app/styles/palette";

const theme = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // extensions
    extend: {
      fontFamily: {
        sans: ["proxima-nova", ...defaultTheme.fontFamily.sans],
        display: ["rift-soft", "proxima-nova", ...defaultTheme.fontFamily.sans],
      },
    },

    // overrides
    colors: {
      // tw defaults reduced
      transparent: "transparent",
      current: "currentColor",
      black: gray.black,
      white: gray.white,
      gray: gray.black,

      green,
      purple,
      red,
      primary: green, // brand-primary
      secondary: purple, // brand-secondary
      success: green, // brand-success
      danger: red, // brand-danger
      info: gray, // brand-info

      default: gray.black,
    },
  },
  plugins: [],
} satisfies Config;

export default theme;
