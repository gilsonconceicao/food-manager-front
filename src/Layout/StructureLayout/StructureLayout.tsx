/* eslint-disable react-hooks/exhaustive-deps */
'use client' 
import React, { useEffect } from 'react'
import { BaseLayout } from '../Base'
import { Stack } from '@mui/material'
import { SideBar } from '@/components/SideBar/SideBar'
import { Header } from '@/components/Header/Header'
import { useRouter } from 'next/navigation'

type StructureLayoutType = {
    children: React.ReactNode
}

export const StructureLayout: React.FC<StructureLayoutType> = ({ children }) => {
    const navigate = useRouter();
    useEffect(() => navigate.push('/home'), [])
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
