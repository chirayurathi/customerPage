import React from 'react';
import { ComponentMeta } from '@storybook/react';
import DeleteDialog from '../components/DeleteDialog';
import { SnackbarProvider } from 'notistack';

export default {
  title: 'Project/dialogs/DeleteDialog',
  component: DeleteDialog,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DeleteDialog>;

export const Delete = () =>   (<SnackbarProvider maxSnack={3}><DeleteDialog open={true} setOpen={()=>{}} id="test" toggleDrawer={()=>{}}/></SnackbarProvider>)