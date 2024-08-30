import { Stack } from "@mui/material";
import styled from "styled-components";
type BaseLayoutContainerProps = {
    isOpen: boolean
}
export const BaseLayoutContainer = styled(Stack)<BaseLayoutContainerProps>(({isOpen}) => ({
    display: 'grid',
    flexDirection: 'row', 
    gridTemplateColumns: `${isOpen? '240px' : '80px'} auto`, 
    transition: '0.3s'
}));