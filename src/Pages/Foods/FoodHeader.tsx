import { FoodCard } from '@/components/FoodCard/FoodCard'
import { ListPaginatation } from '@/services/@types/generic'
import { Food } from '@/services/Foods/Foods.type'
import { Stack, Typography } from '@mui/material'
import React from 'react'

type FoodHeaderProps = {
}

export const FoodHeader: React.FC<FoodHeaderProps> = (props) => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={2}>
            <Stack>
                <Typography variant='h4'>Comidas</Typography>
            </Stack>

            <Stack>
                
            </Stack>
        </Stack>
    )
}
