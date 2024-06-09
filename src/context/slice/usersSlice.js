import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    postUser: (state, { payload }) => {
      return [...state, payload];
    },
    putUser: (state, { payload }) => {
      const index = state?.findIndex((el) => el.id === payload.id);
      console.log(index);
      return state;
    },
    deleteUser: (state, { payload }) => {
      return state?.filter((el) => el.id !== payload.id);
    },
  },
});

export const { deleteUser, postUser, putUser } = usersSlice.actions;

export default usersSlice.reducer;
