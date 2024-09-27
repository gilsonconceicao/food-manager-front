import { Stack, styled } from "@mui/material";

export const UserContainerStack = styled(Stack)<{
    isMobile: boolean
}>(({ isMobile }) => ({
    background: 'ButtonFace',
    borderRadius: '8px',
    padding: '20px',
    // width: !isMobile ? 400 : '100vw',
    display: 'block',
    margin: '20px'
}))