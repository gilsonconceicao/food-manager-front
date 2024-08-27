'use client'
import React from 'react'
import { BaseLayoutContainer } from './BaseLayout.style'

type BaseLayoutProps = {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <BaseLayoutContainer>
      {children}
    </BaseLayoutContainer>
  )
}
