import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/home/store/prodcutSlice";
import cartReducer from "../features/cart/store/cartSlice";


export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
