import { configTheme } from "@/theme/ConfigTheme";
import { Typography } from "antd";
import { Paytone_One } from '@next/font/google';

const openSansFont = Paytone_One({
    weight: '400',
    subsets: ['latin'],
  });

import styled from "styled-components";
import Grid from "antd/es/card/Grid";

export const HeaderComponent = styled.header((({theme}) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '20px',
    borderBottom: '1.5px solid #B8B8B8'
})));

export const TitleHeader = styled(Typography)(() => ({
    fontSize: '20px', 
    fontFamily: openSansFont.style.fontFamily, 
    letterSpacing: '0.1rem'
}))

export const NavigationsHeader = styled(Grid)(() => ({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'start'
}))

export const ActionsHeader = styled(Grid)(() => ({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'start'
}))