import React from 'react';
import { ComponentMeta } from '@storybook/react';
import FormDialog from '../components/FormDialog';
import { SnackbarProvider } from 'notistack';
import { ExistingCustomerInterface } from '../interfaces/customerInterface';
import { ADD_CUSTOMER, UPDATE_CUSTOMER } from '../constants';

export default {
  title: 'Project/dialogs/FormDialog',
  component: FormDialog,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FormDialog>;

const data:ExistingCustomerInterface = {
    name:"test",
    email:"test@gmail.com",
    phone:1234567890,
    id:'98479JhKHhgyug78'
}

export const Add = () =>   (<SnackbarProvider maxSnack={3}><FormDialog open={true} setOpen={()=>{}} type={ADD_CUSTOMER} data={data} /></SnackbarProvider>)
export const Update = () =>   (<SnackbarProvider maxSnack={3}><FormDialog open={true} setOpen={()=>{}} type={UPDATE_CUSTOMER} data={data} /></SnackbarProvider>)