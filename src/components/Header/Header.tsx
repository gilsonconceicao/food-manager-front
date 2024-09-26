"use client";
import React, { useState } from "react";
import { HeaderStack } from "./Header.style";
import { IconButton, Stack, SwipeableDrawer, Typography } from "@mui/material";
import { LogoutOutlined, Menu, PersonAdd } from "@mui/icons-material";
import { useControlMenu } from "@/Hooks/useMenuControl";
import { SideBar } from "../SideBar/SideBar";
import { CheckUserContainer } from "../User/CheckUser/CheckUserContainer";
import Drawer from "../Drawer/Drawer";

export const Header = () => {
    const [action, setAction] = useState<string | undefined>("check-user");
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const { isMobile } = useControlMenu();
    const isAuthenticated = false;

    const handleCloseOpen = () => setOpenMenuMobile(!openMenuMobile);
    const handleCloseAction = () => setAction(undefined);

    const handleSignOrLogout = () => {
        if (isAuthenticated) {
            // logout
        }

        setAction("check-user");
    };

    return (
        <HeaderStack>
            <Typography>Olá, Pessoa</Typography>
            {!isMobile && <Typography>Bolos caseiros e veriedades</Typography>}

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={2}
            >
                <IconButton onClick={handleSignOrLogout}>
                    {isAuthenticated ? <LogoutOutlined /> : <PersonAdd />}
                </IconButton>

                {isMobile && (
                    <IconButton onClick={handleCloseOpen}>
                        <Menu />
                    </IconButton>
                )}
            </Stack>

            <Drawer
                title="Menu"
                open={openMenuMobile}
                anchor="bottom"
                onClose={handleCloseOpen}
            >
                <SideBar onClose={handleCloseOpen} />
            </Drawer>
            <Drawer
                title="Entrar"
                description="Preencha o campo abaixo para entrar"
                open={action === "check-user"}
                sx={{ width: 1000 }}
                onClose={handleCloseAction}
                anchor={isMobile ? "bottom" : "right"}
            >
                <CheckUserContainer />
            </Drawer>
        </HeaderStack>
    );
};
