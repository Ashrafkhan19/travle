import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Product } from "../domain/Product";
import { productRepository } from "../data/productRepo";

interface ProductState {
    items: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    items: [],
    loading: true,
    error: null,
};

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        return await productRepository.getProducts();
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch products";
            });
    },
});

export default productSlice.reducer;
