/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/preview.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Readex Pro", "sans-serif"],
      },
      colors: {
        primary: "hsl(var(--primary) / <alpha-value>)",
        "on-primary": "hsl(var(--on-primary) / <alpha-value>)",
        "secondary-container": "hsl(var(--secondary-container) / <alpha-value>)",
        "on-secondary-container": "hsl(var(--on-secondary-container) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-container-low": "hsl(var(--surface-container-low) / <alpha-value>)",
        "surface-container-highest": "hsl(var(--surface-container-highest) / <alpha-value>)",
        "on-surface": "hsl(var(--on-surface) / <alpha-value>)",
        "inverse-surface": "hsl(var(--inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "hsl(var(--inverse-on-surface) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        error: "hsl(var(--error) / <alpha-value>)",
        "on-error": "hsl(var(--on-error) / <alpha-value>)",
        outline: "hsl(var(--outline) / <alpha-value>)",
      },
      boxShadow: {
        "elevation-1": "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        "elevation-2": "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        "xs": "0.25rem",
      },
      fontSize: {
        "body-small": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
            letterSpacing: "0.033em",
          },
        ],
        "body-medium": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
            letterSpacing: "0.018em",
          },
        ],
        "label-small": [
          "0.625rem",
          {
            lineHeight: "1rem",
            fontWeight: "500",
            letterSpacing: "0.045em",
          },
        ],
        "label-medium": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "500",
            letterSpacing: "0.042em",
          },
        ],
        "label-large": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
            letterSpacing: "0.007em",
          },
        ],
      },
      data: {
        checked: 'state="checked"',
        unchecked: 'state="unchecked"',
      },
    },
  },
  plugins: [],
};
