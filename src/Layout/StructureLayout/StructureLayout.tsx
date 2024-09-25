/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { BaseLayout } from '../Base'
import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { SideBar } from '@/components/SideBar/SideBar'
import { Header } from '@/components/Header/Header'
import { useRouter } from 'next/navigation'
import { useControlMenu } from '@/Hooks/useMenuControl'

type StructureLayoutType = {
    children: React.ReactNode
}

export const StructureLayout: React.FC<StructureLayoutType> = ({ children }) => {
    const theme = useTheme();
    const navigate = useRouter();
    const hasModeMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { setIsMobile, isMobile } = useControlMenu();

    // Atualiza o valor de isMobile no Zustand
    React.useEffect(() => {
        setIsMobile(hasModeMobile);
    }, [hasModeMobile, setIsMobile]);


    useEffect(() => navigate.push('/home'), []);


    const RenderOutlet = () => {
        return (
            <Stack>
                <Header />
                <Stack m={2}>
                    {children}
                </Stack>
            </Stack>
        )
    }

    if (isMobile) {
        return <RenderOutlet />

    }
    return (
        <BaseLayout>
            <Stack>
                <SideBar />
            </Stack>
            <RenderOutlet />
        </BaseLayout>
    )
}
