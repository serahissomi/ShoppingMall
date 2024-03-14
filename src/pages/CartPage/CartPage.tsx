import useCartStore from "apps/cartStore"
import CartContent from "containers/Body/CartContent/CartContent"
import NothingPage from "pages/NothingPage/NothingPage"
import React from "react"

const CartPage = () => {
    const { cartItems, setCarts, total, calculateTotal } = useCartStore()

    return (
        <div>{cartItems.length === 0 ? <NothingPage /> : <CartContent />}</div>
    )
}

export default CartPage