import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";

import "../src/styles.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
  (Story: any) => (
    <>
      <div className="absolute inset-0 bg-background" />
      <div className="relative flex items-center justify-center gap-4 font-sans">
        <Story />
      </div>
    </>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
