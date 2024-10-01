import { Stack, styled } from "@mui/material";

export const UserContainerStack = styled(Stack)<{
    isMobile: boolean
}>(({ isMobile }) => ({
    background: '#151B23',
    color: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: isMobile ? '100%' : '600px',
    display: 'block',
}))