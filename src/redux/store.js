import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/Cart";
import { AdminLogin } from "./Api/admin/AdminLogin";
import { AuthApi } from "./Api/AuthApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AdminCategory } from "./Api/admin/AdminCategory";

export const store = configureStore({
  reducer: {
    CART: CartSlice,
    [AdminLogin.reducerPath]: AdminLogin.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [AdminCategory.reducerPath]: AdminCategory.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AdminLogin.middleware,
      AuthApi.middleware,
      AdminCategory.middleware
    ),
});

setupListeners(store.dispatch);
