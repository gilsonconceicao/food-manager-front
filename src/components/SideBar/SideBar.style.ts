import { Button, Stack, styled } from "@mui/material";

type SideBarStackProps = {
    isOpen: boolean
}

export const SideBarStack = styled(Stack)(() => ({
    background: 'ButtonFace',
    padding: '10px',
    height: '100vh',
    transition: '0.5s',
    textAlign: 'center',
    alignContent: 'center',
    position: 'relative',
    overflow: 'hidden'
}));
