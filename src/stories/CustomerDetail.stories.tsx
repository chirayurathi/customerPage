import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { SnackbarProvider } from 'notistack';
import { LoadingProvider } from '../context';

import CustomerDetail from '../components/CustomerDetail';
import { ExistingCustomerInterface } from '../interfaces/customerInterface';

export default {
  title: 'Project/Customerdetail',
  component: CustomerDetail,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomerDetail>;

export const TestData = () =>{
   const [open,setOpen] = useState<boolean>(true);
   const data:ExistingCustomerInterface = {
       name:"test",
       email:"test@gmail.com",
       phone:1234567890,
       id:'98479JhKHhgyug78'
   }
   return(
    <LoadingProvider>
        <SnackbarProvider maxSnack={3}>
            <CustomerDetail state={open} setState={setOpen} data={data}/>
        </SnackbarProvider>
    </LoadingProvider>
   ) 
}
