import React from "react"

import { IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"

import useCartStore from "apps/cartStore"
import styles from "./cartcontent.module.css"
import Counter from "components/Counter/Counter"

import { ReactComponent as TrashBin } from "assets/icons/bin.svg"

const CartContent = () => {
    const { cartItems, total, clearCarts, deleteOneFromCarts, calculateTotal } =
        useCartStore()

    const navigate = useNavigate()

    return (
        <div>
            <div className={styles.page_title}>장바구니</div>
            <div className={styles.cart_items}>
                {cartItems.map((item) => (
                    <li key={item.id} className={styles.cart_items_li}>
                        <div className={styles.cart_items_container}>
                            <div className={styles.cart_items_left_container}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.cart_img}
                                    // onLoad={handleImageLoad}
                                    // style={{
                                    //     display: loadedImage ? "block" : "none",
                                    // }}
                                />
                                <div className={styles.item_info}>
                                    <div className={styles.item_category}>
                                        {item.category}
                                    </div>
                                    <div
                                        className={styles.item_title}
                                        onClick={() =>
                                            navigate(`/detail?id=${item.id}`)
                                        }
                                    >
                                        {item.title}
                                    </div>
                                    <div className={styles.item_price}>
                                        {item.price}x{item.quantity} = $
                                        {parseFloat(
                                            (
                                                item.price * item.quantity
                                            ).toFixed(2)
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.counter}>
                                <Counter
                                    count={item.quantity}
                                    productId={item.id}
                                />
                            </div>

                            <IconButton
                                aria-label="cart"
                                size="large"
                                color="inherit"
                                onClick={() => {
                                    deleteOneFromCarts(item.id)
                                    calculateTotal()
                                }}
                            >
                                <TrashBin width="35px" height="35px" />
                            </IconButton>
                        </div>

                        <hr className={styles.divide_line} />
                    </li>
                ))}
                <div className={styles.end_group}>
                    <div className={styles.total_box}>
                        Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
                        {total}
                    </div>
                    <button
                        className={`${styles.calc_cart}`}
                        onClick={(e) => {
                            e.preventDefault()
                            clearCarts()
                        }}
                    >
                        계산하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartContent