import { Stack, styled } from "@mui/material";

export const HeaderStack = styled(Stack)(() => ({
    background: '#151B23',
    color: '#fff', 
    padding: '20px', 
    width: '100%', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems:'center'
}));
