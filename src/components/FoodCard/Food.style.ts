import theme from "@/Layout/Theme/Theme";
import { Stack, styled } from "@mui/material";

export const FoodCardStack = styled(Stack)<{isMobile: boolean}>(({isMobile}) => ({
    boxShadow: '1px 10px 68px -17px rgba(0,0,0,0.75);',
    borderRadius: '8px',
    minHeight: '400px',
    width: isMobile ? '100%' : '300px',
    display: 'flex',
    flexDirection: 'column'
}));

export const ContentCardStack = styled(Stack)(({
    padding: '10px 5px'
}));

export const ImageCard = styled('img')(({
    display: 'block',
    height: '25vh',
    borderRadius: '8px',
    objectFit: 'cover',
    width: '100%',
    loading: 'lazy'
}));