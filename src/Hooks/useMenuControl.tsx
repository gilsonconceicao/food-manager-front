import { create } from 'zustand';


type StateMenu = {
    open: boolean
}

type ActionMenu = {
    handleOpenMenu: () => void
}

export const useControlMenu = create<StateMenu & ActionMenu>((set) => ({
    handleOpenMenu: () => set((state) => ({ open: !state.open })), 
    open: true
}))
