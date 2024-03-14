import { create } from "zustand"
import axios from "axios"

import Category from "models/category"
import Product from "models/product"

type ProductStore = {
    detailProduct: Product
    products: Product[]
    setSelectedProduct: (id?: string) => void
    setProducts: (category?: string) => void
}

const useProductStore = create<ProductStore>(
    (set): ProductStore => ({
        products: [],
        detailProduct: {
            id: 0,
            title: "",
            price: 0,
            category: Category.ALL,
            description: "",
            image: "",
        },
        setSelectedProduct: async (id?: string) => {
            const url = `https://fakestoreapi.com/products/${id}`
            const response = await axios.get<Product>(url)
            const detail = response.data

            set(() => ({
                detailProduct: detail,
            }))
        },

        setProducts: async (category?: string) => {
            let url = "https://fakestoreapi.com/products"
            if (category || category !== Category.ALL) {
                url += `/category/${category}`
            }

            const response = await axios.get<Product[]>(url)

            set(() => ({
                products: response.data,
            }))
        },
    })
)

export default useProductStore