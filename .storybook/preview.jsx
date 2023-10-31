import { Global } from '@emotion/react';
import {ThemeProvider} from "@mui/material";
import { GlobalStyle } from '../src/shared/global';
import { essential } from '../src/theme';
/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={essential}>
        <Global styles={GlobalStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
