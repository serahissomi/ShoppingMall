import React, { useEffect, useState } from "react"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom"

import styles from "./maincontent.module.css"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import Category from "models/category"
import Loading from "pages/Loading/Loading"
import useProductStore from "apps/productStore"
import useCartStore from "apps/cartStore"
import Product from "models/product"

const MainContent = () => {
    const store = useProductStore((state) => state)
    const { setCarts, calculateTotal } = useCartStore()

    const [loading, setLoading] = useState(true)
    const [loadedImagesCount, setLoadedImagesCount] = useState(0)

    useEffect(() => {
        loadCategoryData(Category.ALL)
    }, [])

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1)
    }
    const allImagesLoaded = loadedImagesCount === store.products.length

    const loadCategoryData = async (category: Category) => {
        setLoading(true)
        setLoadedImagesCount(0)

        try {
            await store.setProducts(category)
        } catch (error) {
            console.error("Error loading data:", error)
        } finally {
            setLoading(false)
        }
    }

    const addToCart = (product: Product) => {
        setCarts(product)
        calculateTotal()
    }

    return (
        <section className={styles.section}>
            <div className={styles.page_title}>Products</div>
            <div className={styles.buttons_section}>
                <button
                    onClick={() => loadCategoryData(Category.ALL)}
                    className={styles.buttons}
                >
                    모두
                </button>
                <button
                    onClick={() => loadCategoryData(Category.ELECTRONICS)}
                    className={styles.buttons}
                >
                    전자기기
                </button>
                <button
                    onClick={() => loadCategoryData(Category.JEWELRY)}
                    className={styles.buttons}
                >
                    쥬얼리
                </button>
                <button
                    onClick={() => loadCategoryData(Category.MENS_CLOTHING)}
                    className={styles.buttons}
                >
                    남성의류
                </button>
                <button
                    onClick={() => loadCategoryData(Category.WOMENS_CLOTHING)}
                    className={styles.buttons}
                >
                    여성의류
                </button>
            </div>
            <div className={styles.products_section}>
                {loading ? (
                    <Loading />
                ) : (
                    <div>
                        <p>Showing: {store.products.length} items</p>
                        <Grid container spacing={4}>
                            {store.products.map((product) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    xl={3}
                                    key={product.id}
                                >
                                    <Link to={`/detail?id=${product.id}`}>
                                        <div
                                            className={styles.product_container}
                                        >
                                            <div
                                                className={
                                                    styles.product_picture
                                                }
                                            >
                                                {!allImagesLoaded && (
                                                    <Skeleton
                                                        width={170}
                                                        height={220}
                                                    />
                                                )}
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className={styles.main_img}
                                                    onLoad={handleImageLoad}
                                                    style={{
                                                        display: allImagesLoaded
                                                            ? "block"
                                                            : "none",
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    styles.product_title_container
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.product_title
                                                    }
                                                >
                                                    {product.title}
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.product_container_bottom
                                                }
                                            >
                                                <button
                                                    className={`${styles.add_to_cart}`}
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        console.log(
                                                            `${product.title}가 담김!`
                                                        )
                                                        addToCart(product)
                                                    }}
                                                >
                                                    장바구니에 담기
                                                </button>
                                                <div
                                                    className={
                                                        styles.product_price
                                                    }
                                                >
                                                    ${product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MainContent