import React from "react"

import "components/CartIcon/styles/cartstyle.css"

import { IconButton } from "@mui/material"
import { ReactComponent as Cart } from "assets/icons/cart.svg"
import CartHeaderCounter from "./CartHeaderCounter"
import useCartStore from "apps/cartStore"
import useModalStore from "apps/modalStore"

const CartIcon = (): React.JSX.Element => {
    const { cartItems } = useCartStore()
    const { openCart } = useModalStore()

    return (
        <div className="mixed-button">
            <IconButton
                onMouseEnter={openCart}
                aria-label="cart"
                size="large"
                color="inherit"
                // onClick={handleCartModalOpen}
            >
                <Cart width="35px" height="35px" />
                {cartItems.length > 0 && <CartHeaderCounter />}
            </IconButton>
        </div>
    )
}

export default CartIcon