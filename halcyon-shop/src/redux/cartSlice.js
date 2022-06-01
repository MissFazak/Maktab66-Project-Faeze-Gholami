import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempPruduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempPruduct);
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
export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
//  const cartSelector = (state) => state.cart
export default cartReducer;
