"use client";
import React, { useState } from "react";
import { HeaderStack } from "./Header.style";
import { Button, IconButton, Stack, SwipeableDrawer, Typography } from "@mui/material";
import { Add, CheckCircleOutline, CheckCircleOutlineOutlined, LogoutOutlined, Menu, PersonAdd } from "@mui/icons-material";
import { useControlMenu } from "@/Hooks/useMenuControl";
import { SideBar } from "../SideBar/SideBar";
import Drawer from "../Drawer/Drawer";
import { useRouter } from "next/navigation";
import { useUserTasks } from "@/Hooks/useAuthentication";

export const Header = () => {
    const [action, setAction] = useState<string | undefined>(undefined);
    const { push } = useRouter();
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const { isMobile } = useControlMenu();
    const { isLogged, logoutUser, personData } = useUserTasks()

    const isAuthenticated = false;


    const handleCloseOpen = () => setOpenMenuMobile(!openMenuMobile);
    const handleCloseAction = () => setAction(undefined);

    const handleSignOrLogout = () => {
        if (isAuthenticated) {
            // logout
        }
    };

    return (
        <HeaderStack>
            <Typography>{personData !== null ? `Olá, ${personData?.name}` : 'Bolos caseiros e veriedades'}</Typography>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={2}
            >
                {isMobile && (
                    <IconButton onClick={handleCloseOpen}>
                        <Menu />
                    </IconButton>
                )}
            </Stack>


            {!isMobile && !isLogged &&
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Button variant="outlined" onClick={() => push('/check-user')} startIcon={<CheckCircleOutlineOutlined />}>
                        Entrar
                    </Button>
                    <Button variant="contained" onClick={() => push('/create-user')} startIcon={<Add />}>
                        Cadastrar-se
                    </Button>
                </Stack>}

            {isLogged && (
                <IconButton onClick={logoutUser}>
                    <LogoutOutlined/>
                </IconButton>
            )}

            <Drawer
                open={openMenuMobile}
                anchor="bottom"
                onClose={handleCloseOpen}
            >
                <SideBar onClose={handleCloseOpen} />
            </Drawer>
            
        </HeaderStack>
    );
};
