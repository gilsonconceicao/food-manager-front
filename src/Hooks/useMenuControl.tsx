import { create } from 'zustand';

type StateMenu = {
    open: boolean;
    isMobile: boolean; // nova propriedade
}

type ActionMenu = {
    handleOpenMenu: () => void;
    setIsMobile: (isMobile: boolean) => void; // função para atualizar isMobile
}

// Criando o estado com Zustand
export const useControlMenu = create<StateMenu & ActionMenu>((set) => ({
    open: true,
    isMobile: false,
    handleOpenMenu: () => set((state) => ({ open: !state.open })),
    setIsMobile: (isMobile: boolean) => set(() => ({ isMobile })), // Atualiza o valor de isMobile
}));
