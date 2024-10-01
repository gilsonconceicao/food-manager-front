import theme from "@/Layout/Theme/Theme";
import { Stack, styled } from "@mui/material";

export const UserContainerStack = styled(Stack)<{
    isMobile: boolean
}>(({ isMobile }) => ({
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: '8px',
    padding: '20px',
    width: isMobile ? '100%' : '600px',
    display: 'block',
}))