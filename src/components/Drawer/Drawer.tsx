import React, { ReactNode } from 'react';
import { Drawer as DrawerComponent, DrawerProps, Stack, Typography } from '@mui/material';

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
    const drawerStyles = {
        width: anchor === 'left' || anchor === 'right' ? size : 'auto',
        // height: anchor === 'top' || anchor === 'bottom' ? size : 'auto',
    };

    return (
        <DrawerComponent
            anchor={anchor}
            open={open}
            onClose={onClose}
            PaperProps={{ sx: drawerStyles }}
            {...rest}
        >
            <Stack m={2}>
                {title && <Typography  fontSize='19px' fontWeight='bold'>{title}</Typography>}
                {description && <Typography fontSize='14px' fontWeight='normal'>{description}</Typography>}
                {children}
            </Stack>
        </DrawerComponent>
    );
};

export default Drawer;
