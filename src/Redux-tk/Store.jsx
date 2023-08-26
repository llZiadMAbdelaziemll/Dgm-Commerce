import { configureStore } from "@reduxjs/toolkit";
import  productSlice from "./cart-sclice/Product-sclice";
import  cartSlice from "./cart-sclice/Cart-sclice";
import ProductCardSlice from "./cart-sclice/ProductCard-slice";


export const store = configureStore({
    reducer: {
        products: productSlice,
        productsCard: ProductCardSlice,
        cart: cartSlice
    }
})