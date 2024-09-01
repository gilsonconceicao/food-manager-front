import React from 'react'

type ProvidersProps = {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
