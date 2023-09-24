import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../feature/authSlice";
import productsReducer from "../feature/productsSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer
  },
})