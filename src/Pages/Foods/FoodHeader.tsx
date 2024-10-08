import { useControlMenu } from '@/Hooks/Zustand/useMenuControl'
import { Add, RefreshOutlined } from '@mui/icons-material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

type FoodHeaderProps = {
    refetch: () => void; 
    addFood: () => void;
}

export const FoodHeader: React.FC<FoodHeaderProps> = ({addFood, refetch}) => {
    const { isMobile } = useControlMenu();
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={2}>
            <Stack>
                <Typography variant={isMobile ? 'h5' : 'h4'}>Comidas</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' spacing={2}>
                {isMobile ? (
                    <IconButton onClick={refetch}>
                        <RefreshOutlined sx={{ height: '25px', width: '25px', color: '#176' }} />
                    </IconButton>
                ) : (
                    <Button onClick={refetch} startIcon={<RefreshOutlined />} variant='outlined'>
                        Atualizar
                    </Button>

                )}
                <Button onClick={addFood} startIcon={<Add />} variant='contained'>
                    Adicioanr comida
                </Button>
            </Stack>
        </Stack>
    )
}
