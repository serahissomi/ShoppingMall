import React from "react"

import styles from "./cartmodal.module.css"
import { ReactComponent as EmptyCart } from "assets/icons/empty_cart.svg"

const NothingModal = () => {
    return (
        <div className={styles.empty_cart_container}>
            <EmptyCart width={100} height={100} />
            <div className={styles.text_container}>
                <div>
                    <h1>Empty....</h1>
                </div>
            </div>
        </div>
    )
}

export default NothingModal