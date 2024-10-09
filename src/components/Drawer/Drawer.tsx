import React, { ReactNode } from 'react';
import { Drawer as DrawerComponent, DrawerProps, Stack, Typography } from '@mui/material';
import { useControlMenu } from '@/Hooks/Zustand/useMenuControl';

type CustomDrawerProps = {
    open: boolean;
    title?: string;
    description?: string;
    onClose: () => void;
    anchor?: DrawerProps['anchor'];
    children: ReactNode
    size?: number | string;
} & DrawerProps

const Drawer: React.FC<CustomDrawerProps> = ({ open, onClose, title, description, size = 400, anchor = 'right', children, ...rest }) => {
    const { isMobile } = useControlMenu();
    const anchorIsLeft = anchor === 'left' || anchor === 'right'; 
    const drawerStyles = {
        width: anchorIsLeft ? isMobile ? '100%' : size : 'auto',
    };

    return (
        <DrawerComponent
            anchor={anchor}
            open={open}
            onClose={onClose}
            PaperProps={{ sx: drawerStyles }}
            {...rest}
        >
            <Stack p={2}>
                {title && <Typography fontSize='22px' fontWeight='bold'>{title}</Typography>}
                {description && <Typography fontSize='14px' fontWeight='normal'>{description}</Typography>}
                {children}
            </Stack>
        </DrawerComponent>
    );
};

export default Drawer;
