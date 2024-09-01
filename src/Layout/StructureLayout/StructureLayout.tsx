import React from 'react'
import { BaseLayout } from '../Base'
import { Stack } from '@mui/material'
import { SideBar } from '@/components/SideBar/SideBar'
import { Header } from '@/components/Header/Header'

type StructureLayoutType = {
    children: React.ReactNode
}

export const StructureLayout: React.FC<StructureLayoutType> = ({ children }) => {
    return (
        <BaseLayout>
            <Stack>
                <SideBar />
            </Stack>
            <Stack>
                <Header />
                <Stack m={2}>
                    {children}
                </Stack>
            </Stack>
        </BaseLayout>
    )
}
