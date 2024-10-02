import theme from "@/Layout/Theme/Theme";
import { Stack, styled } from "@mui/material";

export const HeaderStack = styled(Stack)(() => ({
    background: theme.palette.secondary.main,
    color: theme.palette.common.white, 
    padding: '20px', 
    width: '100%', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems:'center'
}));
