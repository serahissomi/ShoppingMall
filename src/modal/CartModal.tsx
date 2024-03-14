import { Container, Grid, IconButton } from "@mui/material"
import React from "react"
import CloseIcon from "@mui/icons-material/Close"
import Modal from "react-modal"
import { useNavigate } from "react-router-dom"

import styles from "./cartmodal.module.css"

import ModalContents from "./ModalContents"
import useCartStore from "apps/cartStore"
import NothingModal from "./NothingModal"
import useModalStore from "apps/modalStore"

Modal.setAppElement("#root")

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    content: {
        width: "570px",
        top: "5%",
        left: "auto",
        right: "10%",
        bottom: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        transform: "translate(0, 0)",
        padding: "20px",
        borderRadius: "10px",
    },
}

const CartModal = () => {
    const navigate = useNavigate()
    const { cartItems } = useCartStore()
    const { isCartOpen, closeCart } = useModalStore()

    return (
        <Modal
            isOpen={isCartOpen}
            onRequestClose={closeCart}
            style={customStyles}
        >
            <IconButton onClick={closeCart}>
                <CloseIcon />
            </IconButton>
            <Container
                onMouseLeave={closeCart}
                component="main"
                maxWidth="xl"
                style={{ marginTop: "5%" }}
            >
                <Grid item xs={12} style={{ margin: "20px" }}></Grid>
                {cartItems.length === 0 ? <NothingModal /> : <ModalContents />}

                <div className={`${styles.move_to_cart}`}>
                    <button
                        className={`${styles.move_to_cart_button}`}
                        onClick={(e) => {
                            e.preventDefault()
                            navigate("/cart")
                            closeCart()
                        }}
                    >
                        장바구니로 이동
                    </button>
                </div>
            </Container>
        </Modal>
    )
}

export default CartModal