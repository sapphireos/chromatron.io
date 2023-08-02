import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";

import { green, purple, red, gray } from "./app/styles/palette";

const theme = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "900px",
      },
    },

    // extensions
    extend: {
      fontFamily: {
        sans: ["proxima-nova", ...defaultTheme.fontFamily.sans],
        display: ["rift-soft", "proxima-nova", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        sm: "0.85rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.45rem",
        "2xl": ["1.563rem", { lineHeight: "1.1em" }],
        "3xl": ["1.7rem", { lineHeight: "1.1em" }],
        "4xl": ["3.43rem", { lineHeight: "1.1em" }],
        "5xl": ["5.14rem", { lineHeight: "1.1em" }],
      },

      backgroundImage: {
        hero: `url('/images/jeremy-coffee-prototyping.jpg')`,
        intro: `url('/images/photo-c-coil.jpg')`,
      },
    },

    // overrides
    colors: {
      // tw defaults reduced
      transparent: "transparent",
      current: "currentColor",
      black: gray.black,
      white: gray.white,
      gray,

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
