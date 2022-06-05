import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { SnackbarProvider } from 'notistack';
import { LoadingProvider } from '../context';
import Navbar from '../components/navbar';
export default {
  title: 'Project/Navbar',
  component: Navbar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navbar>;

export const Header = () =>   (
    <LoadingProvider>
    <SnackbarProvider maxSnack={3}>
      <Navbar/>
    </SnackbarProvider>
    </LoadingProvider>
    )