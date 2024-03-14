import React from "react"

import styles from "./alreadyaddbutton.module.css"

const AlreadyAddButton = () => {
    return (
        <button className={`${styles.add_to_cart}`} disabled>
            장바구니에 담긴 제품
        </button>
    )
}

export default AlreadyAddButton