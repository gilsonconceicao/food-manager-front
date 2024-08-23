import { Grid } from 'antd';
import { create } from 'zustand';
import { useEffect } from 'react';

const { useBreakpoint } = Grid;

interface ILayoutState {
    isMobile: boolean;
    theme: 'light' | 'dark';
    setMobile: (value: boolean) => void;
}

const useBearStore = create<ILayoutState>((set) => ({
    isMobile: false,
    theme: 'light',
    setMobile: (value) => set({ isMobile: value })
}));

export const useLayoutHook = (): Pick<ILayoutState, 'isMobile'> => {
    const screens = useBreakpoint();
    const { isMobile, setMobile } = useBearStore();
    
    useEffect(() => {
        const isMobile = Object.entries(screens)
            .map(([key, value]) => ({ size: key, value }))
            .some(screen => !screen.value && screen.size === 'sm');
        setMobile(isMobile);
    }, [screens, setMobile]);

    return {
        isMobile: isMobile
    }
};
