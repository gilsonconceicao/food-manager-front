'use client'
import { FormContextProvider } from '@/Contexts/FormContext'
import React from 'react'
import { checkUserValidationSchema, checkUserValidationDefault } from './CheckUserSchema'
import { CheckUser } from './CheckUser'
import { Stack } from '@mui/material'
import { UserContainerStack } from '../Styles/user.style'
import { FieldValues } from 'react-hook-form'
import { getUserByRegistrationNumberAsync } from '@/services/user'
import { useUserTasks } from '@/Hooks/useAuthentication'
import { useRouter } from 'next/navigation'
import { useControlMenu } from '@/Hooks/useMenuControl'

export const CheckUserContainer = () => {
  const { setUser } = useUserTasks()
  const { push } = useRouter();
  const { isMobile } = useControlMenu();
  const onSubmit = async (values: FieldValues) => {
    try {
      const response = await getUserByRegistrationNumberAsync(values?.registrationNumber); 
      const data = await response.data;
      setUser({
        name: data?.name, 
        registraionNumber: data?.registrationNumber
      });
      push('/home'); 
    } catch (error) {
      console.log("Error", error)
    }
  }

  return (
    <UserContainerStack isMobile={isMobile}>
      <FormContextProvider
        validationSchema={checkUserValidationSchema}
        defaultValues={checkUserValidationDefault}
        onSubmit={onSubmit}
      >
        <CheckUser />
      </FormContextProvider>
    </UserContainerStack>
  )
}
