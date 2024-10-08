import { TextFormField } from '@/components/FormFields/TextFormField'
import { MaskedInput } from '@/components/MaskedInput/MaskedInput'
import { cpfMask } from '@/Constants/Generic'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

export const CheckUser = () => {
  return (
    <Stack spacing={2}>
      <Typography variant='h6' fontWeight='bold'>Entrar</Typography>
      <TextFormField
        label='CPF'
        name='registrationNumber'
        fullWidth
        InputProps={{
          inputComponent: MaskedInput,
          inputProps: { mask: cpfMask },
        }}
      />
      <Button type='submit' variant='contained'>
        Acessar
      </Button>
    </Stack>
  )
}
