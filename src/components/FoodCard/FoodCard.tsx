/* eslint-disable @next/next/no-img-element */
import { Food } from '@/services/Foods/Foods.type'
import React from 'react'
import { ContentCardStack, FoodCardStack, ImageCard } from './Food.style'
import { Stack, Typography } from '@mui/material'
import { useControlMenu } from '@/Hooks/Zustand/useMenuControl'

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
      </ContentCardStack>

    </FoodCardStack>
  )
}
