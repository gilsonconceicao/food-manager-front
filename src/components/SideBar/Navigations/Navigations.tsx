import { Stack, SvgIconTypeMap } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Grading, Home, LocalDining, Moped, } from "@mui/icons-material"
import { GroupIconAndText, LinkNavigate, NavigationsStack } from './Navigations.styled';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useControlMenu } from '@/Hooks/Zustand/useMenuControl';

interface INavigations {
    label: string;
    path: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    enable?: boolean;
    isActive?: boolean ;
}

export const Navigations = () => {
    const pathname = usePathname();
    const { open, isMobile, handleOpenMenu} = useControlMenu();

    const links: INavigations[] = [
        { label: 'Comidas', path: '/home', Icon: LocalDining },
        { label: 'Pedidos', path: '/order', Icon: Moped }, 
    ];

    const linksMapped = () => {
        return links
            .map((x) => {
                const pathMenu = x.path.replace('/', '');
                return {
                    ...x, 
                    isActive: pathname?.includes(pathMenu)
                }
            })
    }; 

    const onCloseWhenIsMobileMode = () => {
        if (isMobile) 
            return handleOpenMenu();
    }
    
    return (
        <NavigationsStack>
            {linksMapped().map(({Icon, label, path, isActive}, i) => {
                return (
                    <LinkNavigate
                        key={i}
                        href={path}
                        onClick={onCloseWhenIsMobileMode}
                        isActive={isActive ?? false}
                    >
                        <GroupIconAndText isOpen={!!open}>
                            <Icon sx={{fontSize: 30 }}/>
                            {open && !isMobile ? label : isMobile ? label :  ""}
                        </GroupIconAndText>
                    </LinkNavigate>
                )
            })}
        </NavigationsStack>
    )
}
