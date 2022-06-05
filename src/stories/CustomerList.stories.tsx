import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SnackbarProvider } from 'notistack';
import { LoadingProvider } from '../context';
import CustomerList from '../components/CustomerList';

export default {
  title: 'Project/CustomerList',
  component: CustomerList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomerList>;

export const List = () =>   (
    <LoadingProvider>
    <SnackbarProvider maxSnack={3}>
      <CustomerList/>
    </SnackbarProvider>
    </LoadingProvider>
    )