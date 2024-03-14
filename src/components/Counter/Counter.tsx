import React from "react"

import styles from "./counter.module.css"
import useCartStore from "apps/cartStore"

interface CounterProps {
    count: number
    productId: number
}

const Counter = ({ count, productId }: CounterProps) => {
    const { incQuantity, decQuantity, calculateTotal } = useCartStore()

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => {
                        incQuantity(productId)
                        calculateTotal()
                    }}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => {
                        decQuantity(productId)
                        calculateTotal()
                    }}
                >
                    -
                </button>
            </div>
        </div>
    )
}

export default Counter