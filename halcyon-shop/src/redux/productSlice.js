import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const productSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, { payload }) => {
      return { items: [...payload] };
    },
  },
});

export const { setItems } = productSlice.actions;
export const itemsSelector = (state) => state.items;
export default productSlice.reducer;

export function fetchItems() {
  return async (disptch) => {
    api.get(`/products`).then((res) => disptch(setItems(res.data)));
  };
}
