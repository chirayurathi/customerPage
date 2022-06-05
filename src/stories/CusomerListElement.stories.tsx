import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SnackbarProvider } from 'notistack';
import { LoadingProvider } from '../context';
import CustomerListElement from '../components/CustomerList/CustomerListElement';
import { CustomerListInterface } from '../interfaces/customerInterface';

export default {
  title: 'Project/CustomerListElement',
  component: CustomerListElement,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomerListElement>;

export const Element = () =>   {
    let customers:CustomerListInterface = {
        test:{
            name:"test",
            email:"test@gmail.com",
            phone:1234567890
        }
    }
    return(
    <LoadingProvider>
    <SnackbarProvider maxSnack={3}>
      <CustomerListElement customers={customers} customerId="test" handleClick={()=>{}}/>
    </SnackbarProvider>
    </LoadingProvider>
    )
}