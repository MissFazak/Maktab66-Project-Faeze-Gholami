import { createSlice } from "@reduxjs/toolkit";
import tutorialService from "./http";

const productSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      return { items: [...action.payload] };
    },
    addItems: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state,action) => {
      let index = state.findIndex(({id})=>id===action.payload.id)
      state.splice(index,1)
    },
    editItem: (state, action) => {
      const index  = state.findIndex(tutorial =>tutorial.id ===action.payload.id)
      state[index] = {
        ...state[index],
        ...action.payload
      }
    },
  },
});

export const { setItems, addItems,removeItem,editItem } = productSlice.actions;
export const itemsSelector = (state) => state.items;
export default productSlice.reducer;

export function fetchItems() {
  return async (disptch) => {
    tutorialService.getProducts().then((res) => disptch(setItems(res.data)));
  };
}

export function updateItems() {
  return async ({ id, data }) => {
    const res = await tutorialService.updateProduct(id, data);
    return res.data;
  };
}

export function deleteItem() {
  return async ({ id }) => {
    await tutorialService.removeProduct(id);
    return { id };
  };
}
