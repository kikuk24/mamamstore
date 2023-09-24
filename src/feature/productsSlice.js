import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "getProducts", async () => {
    const response = await axios.get("http://localhost:3000/products");
    // const response = await axios.get("https://api.creativeacademyid.com/product");
    return response.data;
}
)

const products = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      let oldItems = state.cart.filter(val => val.id !== action.payload.id)
      let newItems = state.cart.filter((val) => val.id === action.payload.id)
      let newQty = newItems.length ? newItems[0]?.qty + 1 : 1
      newItems.length ? newItems[0] = { ...action.payload, qty: newQty } : newItems = [{ ...action.payload, qty: newQty }]
      oldItems.push(newItems[0])
      state.cart = oldItems
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addToCart } = products.actions
export default products.reducer