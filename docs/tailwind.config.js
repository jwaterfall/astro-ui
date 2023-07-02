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
        primary: "#63E2B7",
        "on-primary": "#022c22",
        info: "#70C0E8",
        "on-info": "#082f49",
        success: "#63E2B7",
        "on-success": "#022c22",
        warning: "#F2C97D",
        "on-warning": "#451a03",
        error: "#E88080",
        "on-error": "#450a0a",
        "surface-0": "#101014",
        "surface-1": "#18181C",
        "surface-2": "#2A2A2E",
        "on-surface": "#A6ADBA",
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
        "title-large": [
          "22px",
          {
            lineHeight: "28px",
            fontWeight: 400,
            letterSpacing: "0px",
          },
        ],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [plugin(function ({ addUtilities }) {})],
};
