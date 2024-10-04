import { RefreshOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
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
                <Button startIcon={<RefreshOutlined/>} variant='outlined'> 
                    Atualizar
                </Button>
            </Stack>
        </Stack>
    )
}
