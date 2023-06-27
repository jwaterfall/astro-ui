import React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-styling';

import '../src/styles.css';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
  (Story: any) => (
    <>
      <div className="absolute inset-0 bg-neutral-99 dark:bg-neutral-10" />
      <div className="relative flex gap-4 items-center justify-center font-sans">
        <Story />
      </div>
    </>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
