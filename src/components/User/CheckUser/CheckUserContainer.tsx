import { FormContextProvider } from '@/Contexts/FormContext'
import React from 'react'
import { checkUserValidationSchema, checkUserValidationDefault } from './CheckUserSchema'
import { CheckUser } from './CheckUser'
import { Stack } from '@mui/material'

export const CheckUserContainer = () => {
  return (
    <Stack m={2}>
      <FormContextProvider
        validationSchema={checkUserValidationSchema}
        defaultValues={checkUserValidationDefault}
        onSubmit={(values) => { 
          debugger
        }}
      >
        <CheckUser />
      </FormContextProvider>
    </Stack>
  )
}
