import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (item.quantity += 1),
              }
            : item
        );
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    increament(state, action) {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: (item.quantity += 1),
            }
          : item
      );
    },
    decrement(state, action) {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: (item.quantity -= 1),
            }
          : item
      );
    },
    clear(state) {
      return [];
    },
  },
});
 export const {addToCart,increament,decrement,clear} = cartSlice.actions
 const cartReducer = cartSlice.reducer
 const cartSelector = (state) => state.cart
 export default cartReducer