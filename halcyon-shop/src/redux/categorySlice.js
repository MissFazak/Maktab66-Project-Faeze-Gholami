import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
  },
  reducers: {
    setCategory: (state, { payload }) => {
      return { category: [...payload] };
    },
  },
});

export const { setCategory } = categorySlice.actions;
export const categorySelector = (state) => state.category;
export default categorySlice.reducer;

export function fetchCategory() {
  return async (disptch) => {
    api.get("/category").then((res) => disptch(setCategory(res.data)));
  };
}
