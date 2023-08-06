import defaultTheme from "tailwindcss/defaultTheme";
import type { ThemeConfig } from "tailwindcss/types/config";

const gray = {
  white: "#fff", // white
  100: "#f9f9f9",
  200: "#eee", // gray-lighter
  300: "#d8d8d8", // gray-light
  500: "#555", // gray
  700: "#333", // gray-dark
  900: "#111", // gray-darker
  black: "#111", // black
};
const green = {
  100: "#e8f5ef",
  500: "#49ffa6",
};
const purple = {
  100: "#f3eaff",
  300: "#c77eff",
  500: "#9013fe",
  700: "#6a0dff",
  900: "#4d00ff",
};
const red = {
  500: "FF1973",
};
const primary = green; // brand-primary
const secondary = purple; // brand-secondary
const success = green; // brand-success
const danger = red; // brand-danger
const info = gray; // brand-info

export default {
  ...defaultTheme,
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
    primary, // brand-primary
    secondary, // brand-secondary
    success, // brand-success
    danger, // brand-danger
    info, // brand-info

    default: gray.black,
  },
} as ThemeConfig;
