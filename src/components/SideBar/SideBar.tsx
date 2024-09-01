'use client'
import React, { useState } from 'react'
import { DividerMenu, SideBarStack } from './SideBar.style'
import { Button, IconButton, Stack, Typography } from '@mui/material';
import {
    Fastfood as FastfoodIcon,
    Close as CloseIcon,
    Menu as MenuIcon
} from '@mui/icons-material';
import { iconSx } from '@/Constants/Generic';
import { useControlMenu } from '@/Hooks/useMenuControl';
import { Navigations } from './Navigations/Navigations';

export const SideBar = () => {
    const { handleOpenMenu, open } = useControlMenu()
    return (
        <SideBarStack spacing={3}>
            <Typography >
                <FastfoodIcon sx={{ height: 40, width: 40, color: 'GrayText' }} />
            </Typography>

            <DividerMenu>
                <Navigations />
            </DividerMenu>
            <Button
                onClick={handleOpenMenu}
                variant='text'
                sx={{ color: 'black' }}

            >
                {open ? <CloseIcon sx={{ ...iconSx }} /> : <MenuIcon sx={{ ...iconSx }} />}
            </Button>
        </SideBarStack>
    )
}
