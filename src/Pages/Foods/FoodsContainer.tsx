'use client'
import { useFoodListQuery } from '@/Hooks/Foods/useFoodContext'
import React from 'react'
import { Foods } from './Foods';
import { FoodHeader } from './FoodHeader';
import { Stack } from '@mui/material';

export const FoodsContainer = () => {
    const { data: queryData, isLoading } = useFoodListQuery();

    if (isLoading) {
        return <>Carregando, meu jovem!</>
    }

    return (
        <div>
            <Stack mb={3}>
                <FoodHeader />

            </Stack>
            <Foods queryData={queryData!} />
        </div>
    )
}
