import { Stack, SvgIconTypeMap } from '@mui/material';
import { useRouter } from 'next/navigation'
import React from 'react'
import { Grading, Home, LocalDining, Moped, } from "@mui/icons-material"
import { GroupIconAndText, LinkNavigate, NavigationsStack } from './Navigations.styled';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useControlMenu } from '@/Hooks/useMenuControl';

interface INavigations {
    label: string;
    path: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    enable?: boolean;
    isActive?: boolean;
}

export const Navigations = () => {
    const { open } = useControlMenu();
    const links: INavigations[] = [
        { label: 'Comidas', path: '/home', Icon: LocalDining },
        { label: 'Pedidos', path: '/order', Icon: Moped }, 
    ];

    return (
        <NavigationsStack>
            {links.map(({Icon, label, path}, i) => {
                return (
                    <LinkNavigate
                        key={i}
                        href={path}
                    >
                        <GroupIconAndText isOpen={!!open}>
                            <Icon sx={{fontSize: 30 }}/>
                            {open && label}
                        </GroupIconAndText>
                    </LinkNavigate>
                )
            })}
        </NavigationsStack>
    )
}
