import { configTheme } from "@/theme/ConfigTheme";
import { Typography } from "antd";
import { Paytone_One } from '@next/font/google';

const openSansFont = Paytone_One({
    weight: '400',
    subsets: ['latin'],
});

import styled from "styled-components";
import Grid from "antd/es/card/Grid";
import Link from "next/link";

export const HeaderComponent = styled.header((({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '70px',
    borderBottom: '1.5px solid #D9D9D9',
})));

export const TitleHeader = styled(Grid)(() => ({
    fontFamily: openSansFont.style.fontFamily,
    letterSpacing: '0.1rem'
}))

export const NavigationsHeader = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start'
})); 

export const MobileItemsMenu = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column', 
    textAlign: 'center'
})); 

export const LinkNavigation = styled(Link)<{ isActive: boolean, isMobileMode: boolean }>(({ isActive, isMobileMode }) => ({
    textDecoration: 'none',
    fontSize: '22px',
    padding: '5px 10px',
    transition: '1s',
    borderBottom: isActive ? '2px solid black' : 'none',
    '&:hover': {
        background: '#e4e5e7'
    },
    
}))