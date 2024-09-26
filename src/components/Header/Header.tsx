'use client'
import React, { useState } from 'react'
import { HeaderStack } from './Header.style'
import { Drawer, IconButton, Stack, Typography } from '@mui/material'
import { LogoutOutlined, Menu, PersonAdd } from '@mui/icons-material'
import { useControlMenu } from '@/Hooks/useMenuControl'
import { SideBar } from '../SideBar/SideBar'

export const Header = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const { isMobile } = useControlMenu();
    const isAuthenticated = false;

    const handleCloseOpen = () => setOpenMenuMobile(!openMenuMobile)

    const handleSignOrLogout = () => {
        if (isAuthenticated) {

        }


    }

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
                
                <IconButton onClick={handleSignOrLogout}>
                    {isAuthenticated ? <LogoutOutlined/> : <PersonAdd />}
                </IconButton>

                {isMobile && (
                    <IconButton onClick={handleCloseOpen}>
                        <Menu />
                    </IconButton>
                )}
            </Stack>

            <Drawer open={openMenuMobile} anchor='bottom' onClose={handleCloseOpen}>
                <SideBar onClose={handleCloseOpen} />
            </Drawer>
        </HeaderStack>
    )
}
