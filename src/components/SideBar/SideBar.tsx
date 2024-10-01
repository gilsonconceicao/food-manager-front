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
import { useRouter } from "next/navigation";
import { useUserTasks } from '@/Hooks/useAuthentication';
import theme from '@/Layout/Theme/Theme';

type SideBarProps = {
    onClose?: () => void;
}

export const SideBar = ({ onClose }: SideBarProps) => {
    const { push } = useRouter();
    const { isLogged } = useUserTasks()
    const { handleOpenMenu, open, isMobile } = useControlMenu(); 
    return (
        <SideBarStack spacing={3}>
            <Typography >
                <FastfoodIcon sx={{ height: 40, width: 40, color: theme.palette.common.white }} />
            </Typography>

            {isMobile && !isLogged && (
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Button onClick={() => push('/check-user')} sx={{width: '100%'}} variant="outlined" startIcon={<CheckCircleOutlineOutlined />}>
                        Entrar
                    </Button>
                    <Button onClick={() => push('/create-user')} sx={{width: '100%'}} variant="contained" startIcon={<Add />}>
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
                sx={{ color: theme.palette.common.white }}

            >
                {open && !isMobile ? <CloseIcon sx={{ ...iconSx }} /> : isMobile ? <CloseIcon sx={{ ...iconSx }} /> : <MenuIcon sx={{ ...iconSx }} />}
            </Button>
        </SideBarStack>
    )
}
