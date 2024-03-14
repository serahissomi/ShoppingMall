import { create } from "zustand"

type ModalState = {
    isCartOpen: boolean
    openCart: () => void
    closeCart: () => void
}

const useModalStore = create<ModalState>((set) => ({
    isCartOpen: false,
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),
}))

export default useModalStore