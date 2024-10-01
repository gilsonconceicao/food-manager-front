
'use client'
import theme from '@/Layout/Theme/Theme'
import { ThemeProvider } from '@emotion/react'
import React from 'react'

type ProvidersProps = {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
