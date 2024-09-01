import { Stack, styled } from "@mui/material";
import Link from "next/link";

type IsOpenType = {
    isOpen: boolean
}

export const NavigationsStack = styled(Stack)(() => ({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: '20px 0', 
    cursor: 'pointer'
})); 

export const LinkNavigate = styled(Link)<{
    isActive: boolean
}>(({isActive}) => ({
    display: 'flex', 
    background: isActive ? '#d9d9d9' :'none',
    flexDirection: 'column', 
    justifyContent: 'center', 
    textDecoration: 'none', 
    padding: '10px', 
    margin: '10px 0',
    borderRadius: '7px',
    ":hover": {
        background: '#d9d9d9'
    }
}))

export const GroupIconAndText = styled(Stack)<IsOpenType>(({isOpen}) => ({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: isOpen ? 'start' : 'center', 
    gap: 10
}))