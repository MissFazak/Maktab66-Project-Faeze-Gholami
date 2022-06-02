import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
        toast.info(
          `شما ${state.cartItems[itemIndex].name} را به سبد خرید اضافه کردید`
        );
      } else {
        const tempPruduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempPruduct);
        toast.success(`${action.payload.name} به سبد خرید اضافه شد`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
     const nextCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} از سبد خرید حذف شد`);
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
export const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
//  const cartSelector = (state) => state.cart
export default cartReducer;