'use client'
import React, { useState } from 'react'
import { SideBarStack } from './SideBar.style'
import { Button, IconButton, Stack, Typography } from '@mui/material';
import {
    Fastfood as FastfoodIcon, 
    Close as CloseIcon, 
    Menu as MenuIcon
} from '@mui/icons-material';
import { iconSx } from '@/Constants/Generic';
import { useControlMenu } from '@/Hooks/useMenuControl';

export const SideBar = () => {
    const { handleOpenMenu, open } = useControlMenu()
    return (
        <SideBarStack>
            <Typography >
                <FastfoodIcon sx={iconSx} />
            </Typography>
            <Typography>Teste</Typography>

            <Button onClick={handleOpenMenu} variant='text' sx={{color: 'black'}} >
                {open ? <CloseIcon sx={iconSx} /> : <MenuIcon sx={iconSx} />}
            </Button>
        </SideBarStack>
    )
}
