import { Button, Stack, styled } from "@mui/material";

type SideBarStackProps = {
    isOpen: boolean
}

export const SideBarStack = styled(Stack)(() => ({
    background: '#151B23',
    padding: '10px',
    height: '100vh',
    transition: '0.5s',
    textAlign: 'center',
    alignContent: 'center',
    position: 'relative',
    overflow: 'hidden'
}));

export const DividerMenu = styled(Stack)(() => ({
    borderBottom: '1px solid grey', 
    borderTop: '1px solid grey'
}));
