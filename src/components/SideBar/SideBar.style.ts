import theme from "@/Layout/Theme/Theme";
import { Stack, styled } from "@mui/material";

type SideBarStackProps = {
    isOpen: boolean
}

export const SideBarStack = styled(Stack)(() => ({
    background: theme.palette.secondary.main,
    padding: '10px',
    height: '100vh', // Altura garantida para cobrir toda a tela
    transition: '0.5s',
    textAlign: 'center',
    alignContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
}));

export const DividerMenu = styled(Stack)(() => ({
    borderBottom: '1px solid grey', 
    borderTop: '1px solid grey'
}));
