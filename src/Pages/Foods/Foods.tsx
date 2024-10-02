import { FoodCard } from '@/components/FoodCard/FoodCard'
import { ListPaginatation } from '@/services/@types/generic'
import { Food } from '@/services/Foods/Foods.type'
import { Stack } from '@mui/material'
import React from 'react'

type FoodsProps = {
    queryData: ListPaginatation<Food> 
}

export const Foods: React.FC<FoodsProps> = ({ queryData }) => {
    return (
        <Stack direction='row' alignItems='center' flexWrap='wrap' spacing={2} gap={3}>
            {queryData?.data.map((item, index) => {
                return (
                    <FoodCard key={index} food={item}/>
                )
            })}
        </Stack>
    )
}
