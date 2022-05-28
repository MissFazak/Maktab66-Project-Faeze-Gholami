import { createSlice } from "@reduxjs/toolkit";
import service from "./http";

const productSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        name: "",
        category: "",
        price: "",
        count: "",
        description: "",
        images: [],
        thumbnail: "",
        id: 0,
        createdAt: 0,
      },
    ],
  },
  reducers: {
    setItems: (state, action) => {
      return { items: [...action.payload] };
    },
  },
});

export const { setItems, setState } = productSlice.actions;
export const itemsSelector = (state) => state.items;
export default productSlice.reducer;

export function fetchItems() {
  return async (disptch) => {
    service.getProducts().then((res) => disptch(setItems(res.data)));
  };
}
