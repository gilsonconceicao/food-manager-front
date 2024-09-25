'use client'
import React, { useState } from 'react'
import { HeaderStack } from './Header.style'
import { Drawer, IconButton, Stack, Typography } from '@mui/material'
import { LogoutOutlined, Menu } from '@mui/icons-material'
import { useControlMenu } from '@/Hooks/useMenuControl'
import { SideBar } from '../SideBar/SideBar'

export const Header = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const { isMobile} = useControlMenu();

    const handleCloseOpen = () => setOpenMenuMobile(!openMenuMobile)

    return (
        <HeaderStack>
            <Typography>
                Olá, Pessoa
            </Typography>
            {!isMobile &&
                <Typography>
                    Bolos caseiros e veriedades
                </Typography>}

            <Stack direction='row' alignItems='center' justifyContent='flex-start' spacing={2}>

                <LogoutOutlined />
                {isMobile && (
                    <IconButton onClick={handleCloseOpen}>
                        <Menu />
                    </IconButton>
                )}
            </Stack>

            <Drawer open={openMenuMobile} anchor='bottom' onClose={handleCloseOpen}>
                <SideBar />
            </Drawer>
        </HeaderStack>
    )
}
