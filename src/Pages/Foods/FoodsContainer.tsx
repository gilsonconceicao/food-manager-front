'use client'
import { useFoodListQuery } from '@/Hooks/Foods/useFoodContext'
import React, { useState } from 'react'
import { Foods } from './Foods';
import { FoodHeader } from './FoodHeader';
import { Stack } from '@mui/material';
import Drawer from '@/components/Drawer/Drawer';
import { AddFoodFormContainer } from './Drawers/AddFoodForm/AddFoodFormContainer';

export const FoodsContainer = () => {
    const [action, setAction] = useState<string | undefined>(undefined);
    const { data: queryData, isLoading, isFetching, refetch } = useFoodListQuery();

    const onClose = () => setAction(undefined);

    
    return (
        <div>
            <Stack mb={3}>
                <FoodHeader
                    refetch={refetch}
                    addFood={() => setAction('addFood')}
                />
            </Stack>
            {isLoading || isFetching && <>Carregando...</>}
            <Foods queryData={queryData!} />

            <Drawer title='Adicionar comida' onClose={onClose} open={action === 'addFood'} anchor='right' size='50%'>
                <AddFoodFormContainer onClose={onClose} refetch={refetch}/>
            </Drawer>
        </div>
    )
}
