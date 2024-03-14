import Category from "models/category"

type Product = {
    id: number
    title: string
    price: number
    category: Category
    description: string
    image: string
}

export default Product