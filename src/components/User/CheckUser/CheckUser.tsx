import { TextFormField } from '@/components/FormFields/TextFormField'
import { Stack } from '@mui/material'
import React from 'react'

export const CheckUser = () => {
  return (
    <Stack spacing={2}>
      <TextFormField
        label='CPF'
        name='registrationNumber'
        fullWidth
      />
      <button type='submit'>button to send</button>
    </Stack>
  )
}
