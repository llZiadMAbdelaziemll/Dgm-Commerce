import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsCard = createAsyncThunk("productCardSlice/fetchProductsCard", async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
   
    return data.products;
} )




const productCardSlice =createSlice({
    initialState : [],
    name: "productCardSlice",
    reducers:{},
    extraReducers: (builder) => {
      builder.addCase(fetchProductsCard.fulfilled,(state,action) => {
        return action.payload;
      })
      
    }
})


export const {} = productCardSlice.actions;
export default productCardSlice.reducer;