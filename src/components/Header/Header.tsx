'use client'
import React from 'react'
import { HeaderStack } from './Header.style'
import { Typography } from '@mui/material'
import { LogoutOutlined } from '@mui/icons-material'

export const Header = () => {
    return (
        <HeaderStack>
            <Typography>
                Olá, Pessoa
            </Typography>
            <Typography>
                Bolos caseiros e veriedades
            </Typography>
            <LogoutOutlined />
        </HeaderStack>
    )
}
