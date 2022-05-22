import { createSlice } from "@reduxjs/toolkit";
import tutorialService from "./http";

const productSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, { payload }) => {
      return { items: [...payload] };
    },
    addItems: (state, action) => {
      state.value.push(action.payload);
    },
    removeItem: () => {},
    editItem: () => {},
  },
});

export const { setItems,addItems } = productSlice.actions;
export const itemsSelector = (state) => state.items;
export default productSlice.reducer;

export function fetchItems() {
  return async (disptch) => {
    tutorialService.getProducts().then((res) => disptch(setItems(res.data)));
  };
}
