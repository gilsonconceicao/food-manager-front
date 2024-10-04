'use client'
import { useFoodListQuery } from '@/Hooks/Foods/useFoodContext'
import React from 'react'
import { Foods } from './Foods';
import { FoodHeader } from './FoodHeader';
import { Stack } from '@mui/material';

export const FoodsContainer = () => {
    const { data: queryData, isLoading, isFetching, refetch} = useFoodListQuery();

    return (
        <div>
            <Stack mb={3}>
                <FoodHeader refetch={refetch} />
            </Stack>
            {isLoading || isFetching && <>Carregando...</>}
            <Foods queryData={queryData!} />
        </div>
    )
}
