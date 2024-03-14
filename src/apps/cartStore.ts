import { create } from "zustand"

import Product from "models/product"
import CartProduct from "models/cartProduct"

type CartStore = {
    total: number
    cartItems: CartProduct[]
    incQuantity: (productId: number) => void
    decQuantity: (productId: number) => void
    clearCarts: () => void
    deleteOneFromCarts: (productId: number) => void
    setCarts: (newProduct: Product) => void
    calculateTotal: () => void
}

const useCartStore = create<CartStore>(
    (set): CartStore => ({
        total: 0,
        cartItems: [],
        clearCarts: () => {
            set(() => {
                return {
                    cartItems: [],
                }
            })
        },
        incQuantity: (productId) => {
            set((state) => {
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
            })
        },
        decQuantity: (productId) => {
            set((state) => {
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.id === productId
                            ? {
                                ...item,
                                quantity:
                                    item.quantity <= 1
                                        ? 1
                                        : item.quantity - 1,
                            }
                        : item
                    ),
                }
            })
        },
        setCarts: (newProduct: Product) => {
            set((state) => {
                const existingItem = state.cartItems.find(
                    (item) => item.id === newProduct.id
                )

                if (existingItem) {
                    return {
                        cartItems: state.cartItems.map((item) =>
                            item.id === newProduct.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    }
                } else {
                    return {
                        cartItems: [
                            ...state.cartItems,
                            { ...newProduct, quantity: 1 },
                        ],
                    }
                }
            })
        },
        deleteOneFromCarts: (productId) => {
            set((state) => {
                return {
                    cartItems: state.cartItems.filter(
                        (item) => item.id !== productId
                    ),
                }
            })
        },
        calculateTotal: () => {
            set((state) => {
                const total = state.cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                )
                return { total: parseFloat(total.toFixed(2)) }
            })
        },
    })
)

export default useCartStore