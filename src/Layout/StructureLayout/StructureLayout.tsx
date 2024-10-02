/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { BaseLayout } from '../Base'
import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { SideBar } from '@/components/SideBar/SideBar'
import { Header } from '@/components/Header/Header'
import { usePathname, useRouter } from 'next/navigation'
import { useControlMenu } from '@/Hooks/Zustand/useMenuControl'
import { useUserTasks } from '@/Hooks/Zustand/useAuthentication'

type StructureLayoutType = {
    children: React.ReactNode
}

export const StructureLayout: React.FC<StructureLayoutType> = ({ children }) => {
    const theme = useTheme();
    const navigate = useRouter();
    const pathname = usePathname();
    const hasModeMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { setIsMobile, isMobile } = useControlMenu();

    const isSpecialRoute = ['check-user', 'create-user'].includes(pathname?.replace('/', '')!);

    React.useEffect(() => {
        setIsMobile(hasModeMobile);
    }, [hasModeMobile, setIsMobile]);

    useEffect(() => navigate.push('/home'), []);

    const RenderOutlet = () => {
        return (
            <Stack>
                <Header />
                <Stack m={isMobile ? 2 : 4}>
                    {children}
                </Stack>
            </Stack>
        )
    }

    if (isMobile && !isSpecialRoute) {
        return <RenderOutlet />
    }

    if (isSpecialRoute) {
        return <>{children}</>
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
