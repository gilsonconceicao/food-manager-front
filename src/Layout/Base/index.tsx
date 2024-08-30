'use client'
import React from 'react'
import { BaseLayoutContainer } from './BaseLayout.style'
import { useControlMenu } from '@/Hooks/useMenuControl';

type BaseLayoutProps = {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const { open } = useControlMenu()

  return (
    <BaseLayoutContainer isOpen={open}>
      {children}
    </BaseLayoutContainer>
  )
}
