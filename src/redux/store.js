import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/Cart";

export const store = configureStore({
  reducer: {
    CART: CartSlice,
  },
});
