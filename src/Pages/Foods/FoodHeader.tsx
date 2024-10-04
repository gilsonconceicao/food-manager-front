import { useControlMenu } from '@/Hooks/Zustand/useMenuControl'
import { RefreshOutlined } from '@mui/icons-material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

type FoodHeaderProps = {
    refetch: () => void
}

export const FoodHeader: React.FC<FoodHeaderProps> = (props) => {
    const { isMobile } = useControlMenu();
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={2}>
            <Stack>
                <Typography variant={isMobile ? 'h5' : 'h4'}>Comidas</Typography>
            </Stack>
            <Stack>
                {isMobile ? (
                    <IconButton onClick={() => props.refetch()}>
                        <RefreshOutlined sx={{height: '25px', width: '25px', color: '#176'}}/>
                    </IconButton>
                ) : (
                    <Button onClick={() => props.refetch()} startIcon={<RefreshOutlined/>} variant='outlined'> 
                        Atualizar
                    </Button>

                )}
            </Stack>
        </Stack>
    )
}
