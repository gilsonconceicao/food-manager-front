import { Stack, styled } from "@mui/material";
import Link from "next/link";

type IsOpenType = {
    isOpen: boolean
}

export const NavigationsStack = styled(Stack)(() => ({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center'
})); 

export const LinkNavigate = styled(Link)(() => ({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    textDecoration: 'none', 
    padding: '10px'
}))

export const GroupIconAndText = styled(Stack)<IsOpenType>(({isOpen}) => ({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    // justifyItems: 'center', 
    justifyContent: isOpen ? 'start' : 'center', 
    gap: 10
}))