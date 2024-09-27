'use client'
import { FormContextProvider } from '@/Contexts/FormContext'
import React from 'react'
import { checkUserValidationSchema, checkUserValidationDefault } from './CheckUserSchema'
import { CheckUser } from './CheckUser'
import { Stack } from '@mui/material'
import { UserContainerStack } from '../Styles/user.style'

export const CheckUserContainer = () => {
  return (
    <UserContainerStack>
      <FormContextProvider
        validationSchema={checkUserValidationSchema}
        defaultValues={checkUserValidationDefault}
        onSubmit={(values) => {
          debugger
        }}
      >
        <CheckUser />
      </FormContextProvider>
    </UserContainerStack>
  )
}
