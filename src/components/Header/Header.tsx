'use client'
import { Button, Flex, Typography } from 'antd'
import React from 'react'
import { NavigationsHeader, HeaderComponent, TitleHeader, ActionsHeader } from './Header.style'
import Grid from 'antd/es/card/Grid'
import { ShoppingCartOutlined } from '@ant-design/icons'

export const Header = () => {
  return (
    <HeaderComponent>
      <Grid>
        <TitleHeader>
          Bolos caseiros e variedades
        </TitleHeader>
      </Grid>
      <NavigationsHeader>
        <h1>ABCD</h1>
      </NavigationsHeader>

      <ActionsHeader>
        <Button type="text" shape="circle" icon={<ShoppingCartOutlined style={{fontSize: '24px'}}/>} />
      </ActionsHeader>

    </HeaderComponent>
  )
}
