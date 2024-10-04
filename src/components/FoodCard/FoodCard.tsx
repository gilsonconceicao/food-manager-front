/* eslint-disable @next/next/no-img-element */
import { Food } from '@/services/Foods/Foods.type'
import React from 'react'
import { ActionsCardStack, ContentCardStack, FoodCardStack, ImageCard, LoveArea } from './Food.style'
import { Button, Stack, Typography } from '@mui/material'
import { useControlMenu } from '@/Hooks/Zustand/useMenuControl'
import { AddShoppingCart, FavoriteBorderOutlined } from '@mui/icons-material'

type FoodCardProps = {
  food: Food
}

export const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { isMobile } = useControlMenu();
  return (
    <FoodCardStack isMobile={isMobile}>
      <Stack>
        <ImageCard src={`https://${food.url}`} alt={food.name} />
      </Stack>
      <ContentCardStack>
        <Typography variant='h6' fontWeight='bold'>{food.name}</Typography>
        <hr />
        <Typography variant='caption' fontWeight='bold'>{food.description}</Typography>
      </ContentCardStack>
      <LoveArea>
        <FavoriteBorderOutlined />
      </LoveArea>
      <ActionsCardStack isMobile={isMobile}>
        <Button variant="contained" sx={{ borderRadius: '0 0 8px 8px' }} startIcon={<AddShoppingCart />}>
          Comprar
        </Button>
      </ActionsCardStack>
    </FoodCardStack>
  )
}
