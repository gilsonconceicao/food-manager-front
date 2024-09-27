'use client'
import React, { useState } from 'react'
import { DividerMenu, SideBarStack } from './SideBar.style'
import { Button, IconButton, Stack, Typography } from '@mui/material';
import {
    Fastfood as FastfoodIcon,
    Close as CloseIcon,
    Menu as MenuIcon,
    CheckCircleOutlineOutlined,
    Add
} from '@mui/icons-material';
import { iconSx } from '@/Constants/Generic';
import { useControlMenu } from '@/Hooks/useMenuControl';
import { Navigations } from './Navigations/Navigations';

type SideBarProps = {
    onClose?: () => void;
}

export const SideBar = ({ onClose }: SideBarProps) => {
    const { handleOpenMenu, open, isMobile } = useControlMenu()
    return (
        <SideBarStack spacing={3}>
            <Typography >
                <FastfoodIcon sx={{ height: 40, width: 40, color: 'GrayText' }} />
            </Typography>

            {isMobile && (
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Button sx={{width: '100%'}} variant="outlined" startIcon={<CheckCircleOutlineOutlined />}>
                        Entrar
                    </Button>
                    <Button sx={{width: '100%'}} variant="contained" startIcon={<Add />}>
                        Cadastrar-se
                    </Button>
                </Stack>
            )}

            <DividerMenu>
                <Navigations />
            </DividerMenu>
            <Button
                onClick={() => isMobile ? onClose && onClose() : handleOpenMenu()}
                variant='text'
                sx={{ color: 'black' }}

            >
                {open && !isMobile ? <CloseIcon sx={{ ...iconSx }} /> : isMobile ? <CloseIcon sx={{ ...iconSx }} /> : <MenuIcon sx={{ ...iconSx }} />}
            </Button>
        </SideBarStack>
    )
}
