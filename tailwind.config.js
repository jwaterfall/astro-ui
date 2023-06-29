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
        "inverse-primary": "hsl(var(--inverse-primary) / <alpha-value>)",
        "secondary-container": "hsl(var(--secondary-container) / <alpha-value>)",
        "on-secondary-container": "hsl(var(--on-secondary-container) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-container-low": "hsl(var(--surface-container-low) / <alpha-value>)",
        "surface-container": "hsl(var(--surface-container) / <alpha-value>)",
        "surface-container-highest": "hsl(var(--surface-container-highest) / <alpha-value>)",
        "on-surface": "hsl(var(--on-surface) / <alpha-value>)",
        "on-surface-variant": "hsl(var(--on-surface-variant) / <alpha-value>)",
        "inverse-surface": "hsl(var(--inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "hsl(var(--inverse-on-surface) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        error: "hsl(var(--error) / <alpha-value>)",
        "on-error": "hsl(var(--on-error) / <alpha-value>)",
        outline: "hsl(var(--outline) / <alpha-value>)",
        "outline-variant": "hsl(var(--outline-variant) / <alpha-value>)",
      },
      boxShadow: {
        "elevation-1": "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        "elevation-2": "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        "elevation-3": "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        xs: "0.25rem",
      },
      fontSize: {
        "body-small": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "calc(400 * var(--font-weight-multiplier))",
            letterSpacing: "0.033em",
          },
        ],
        "body-medium": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "calc(400 * var(--font-weight-multiplier))",
            letterSpacing: "0.018em",
          },
        ],
        "body-large": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "calc(400 * var(--font-weight-multiplier))",
            letterSpacing: "0.031em",
          },
        ],
        "label-small": [
          "0.625rem",
          {
            lineHeight: "1rem",
            fontWeight: "calc(500 * var(--font-weight-multiplier))",
            letterSpacing: "0.045em",
          },
        ],
        "label-medium": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "calc(500 * var(--font-weight-multiplier))",
            letterSpacing: "0.042em",
          },
        ],
        "label-large": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "calc(500 * var(--font-weight-multiplier))",
            letterSpacing: "0.007em",
          },
        ],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "snackbar-open": "slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "snackbar-close": "fade-out 100ms ease-in",
        "snackbar-swipe-end": "snackbar-swipe-out 150ms ease-out",
      },
      keyframes: {
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(50vw)" },
          "100%": { transform: "translateX(0)" },
        },
        "snackbar-swipe-out": {
          "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          "100%": { transform: "translateX(50vw)" },
        },
      },
      data: {
        checked: 'state="checked"',
        unchecked: 'state="unchecked"',
      },
    },
  },
  plugins: [],
};
