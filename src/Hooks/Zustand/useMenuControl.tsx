import { create } from 'zustand';

type StateMenu = {
    open: boolean;
    isMobile: boolean;
}

type ActionMenu = {
    handleOpenMenu: () => void;
    setIsMobile: (isMobile: boolean) => void; 
}

export const useControlMenu = create<StateMenu & ActionMenu>((set) => ({
    open: true,
    isMobile: false,
    handleOpenMenu: () => set((state) => ({ open: !state.open })),
    setIsMobile: (isMobile: boolean) => set(() => ({ isMobile })), 
}));
