import React from "react"
import styles from "pages/NothingPage/nothing.module.css"
import { ReactComponent as EmptyCart } from "assets/icons/empty_cart.svg"
import { Link } from "react-router-dom"

const NothingPage = () => {
    return (
        <div className={styles.empty_cart_container}>
            <EmptyCart width={500} height={500} />
            <div className={styles.text_container}>
                <div>
                    <h1>장바구니가 비어있습니다.</h1>
                </div>
                <div>
                    <h3>응애 나 배고파...</h3>
                </div>
                <Link className={styles.gohome} to="/">
                    <h2>쇼핑 계속하러 가기</h2>
                </Link>
            </div>
        </div>
    )
}

export default NothingPage