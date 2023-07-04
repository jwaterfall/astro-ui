const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}", "../src/**/*.{css,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Readex Pro", "sans-serif"],
      },
      colors: {
        primary: "#818cf8",
        "on-primary": "#1e1b4b",
        info: "#60a5fa",
        "on-info": "#172554",
        success: "#34d399",
        "on-success": "#022c22",
        warning: "#fdba74",
        "on-warning": "#431407",
        error: "#f87171",
        "on-error": "#450a0a",
        "surface-0": "#111827",
        "surface-1": "#18202f",
        "surface-2": "#1f2937",
        "surface-3": "#2B3544",
        "on-surface": "#f9fafb",
        "on-surface-variant": "#9ca3af",
      },
      boxShadow: {
        "elevation-1": "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        "elevation-2": "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        "elevation-3": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
      },
      fontSize: {
        "body-small": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: 400,
            letterSpacing: "0.4px",
          },
        ],
        "body-medium": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 400,
            letterSpacing: "0.25px",
          },
        ],
        "body-large": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 400,
            letterSpacing: "0.5px",
          },
        ],
        "label-small": [
          "11px",
          {
            lineHeight: "16px",
            fontWeight: 500,
            letterSpacing: "0.5px",
          },
        ],
        "label-medium": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: 500,
            letterSpacing: "0.5px",
          },
        ],
        "label-large": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 500,
            letterSpacing: "0.1px",
          },
        ],
        "title-small": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 500,
            letterSpacing: "0.1px",
          },
        ],
        "title-medium": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 500,
            letterSpacing: "0.15px",
          },
        ],
        "title-large": [
          "22px",
          {
            lineHeight: "28px",
            fontWeight: 400,
            letterSpacing: "0px",
          },
        ],
      },
    },
  },
  plugins: [plugin(function ({ addUtilities }) {})],
};
