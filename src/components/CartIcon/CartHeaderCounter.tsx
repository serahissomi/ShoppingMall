import React from "react"

import useCartStore from "apps/cartStore"

const CartHeaderCounter = (): React.JSX.Element => {
    let counterClass
    const { cartItems } = useCartStore()
    const count = cartItems.length

    if (count >= 99) {
        counterClass = "counter-number-over99"
    } else if (count > 9) {
        counterClass = "counter-number-over9"
    } else {
        counterClass = "counter-number"
    }

    return (
        <div className="header-count">
            {count > 0 && (
                <div className={counterClass}>
                    {count >= 99 ? "99+" : count}
                </div>
            )}
        </div>
    )
}

export default CartHeaderCounter