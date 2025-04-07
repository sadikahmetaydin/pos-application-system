import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find((item) => item._id === action.payload._id);
      findCartItem ? findCartItem.quantity = findCartItem.quantity + 1 : state.cartItems.push(action.payload);
    },
    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
    },
  },
});

export const { addProduct, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
