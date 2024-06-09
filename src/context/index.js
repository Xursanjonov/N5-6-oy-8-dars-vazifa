import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/productsSlice";
import usersSlice from "./slice/usersSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    users: usersSlice,
  },
});

export default store;
