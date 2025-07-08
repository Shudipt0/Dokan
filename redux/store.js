import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartslice/cartSlice'


const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})