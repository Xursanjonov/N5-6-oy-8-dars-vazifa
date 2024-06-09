import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state) => {
      return state;
    },
    postProduct: (state, action) => {
      return [...state, action.payload];
    },
    putProduct: (state, { payload }) => {
      const index = state?.findIndex((el) => el.id === payload.id);
      console.log(index);
      return state;
    },
    deleteProduct: (state, { payload }) => {
      return state?.filter((el) => el.id !== payload.id);
    },
  },
});

export const { getProduct, postProduct, deleteProduct, putProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
