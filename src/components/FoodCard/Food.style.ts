import theme from "@/Layout/Theme/Theme";
import { IconButton, Stack, styled } from "@mui/material";

export const FoodCardStack = styled(Stack)<{isMobile: boolean}>(({isMobile}) => ({
    boxShadow: '1px 10px 68px -17px rgba(0,0,0,0.75);',
    borderRadius: '8px',
    height: '400px',
    width: isMobile ? '100%' : '300px',
    display: 'flex',
    flexDirection: 'column', 
    position: 'relative'
}));

export const ActionsCardStack = styled(Stack)<{isMobile: boolean}>(({isMobile}) => ({
    position: 'absolute', 
    bottom: '0', 
    width: '100%'
}));

export const ContentCardStack = styled(Stack)(({
    padding: '10px '
}));

export const ImageCard = styled('img')(({
    display: 'block',
    height: '20vh',
    borderRadius: '8px',
    objectFit: 'cover',
    width: '100%',
    loading: 'lazy'
}));

export const LoveArea = styled(IconButton)(({
   position: 'absolute', 
   padding: '2px', 
   borderRadius: '100%', 
   top: '21vh', 
   right: '10px'
}))