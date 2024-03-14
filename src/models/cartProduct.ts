import Product from "./product"

interface CartProduct extends Product {
    quantity: number
}

export default CartProduct