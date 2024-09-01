import { Stack, styled } from "@mui/material";

type BaseLayoutContainerProps = {
    isOpen: boolean
}
export const BaseLayoutContainer = styled(Stack)<BaseLayoutContainerProps>(({isOpen}) => ({
    display: 'grid',
    flexDirection: 'row', 
    gridTemplateColumns: `${isOpen? '240px' : '80px'} auto`, 
    transition: '0.3s'
}));