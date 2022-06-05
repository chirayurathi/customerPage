import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { SnackbarProvider } from 'notistack';
import { LoadingProvider } from '../context';

import App from '../App';

export default {
  title: 'Project/App',
  component: App,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof App>;

export const Main = () =>   (
<LoadingProvider>
<SnackbarProvider maxSnack={3}>
  <App />
</SnackbarProvider>
</LoadingProvider>
)