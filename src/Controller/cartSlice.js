// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState: [
    {name: 'currentCart', cartItems: []},
  ],
  reducers: {
    addToCart: (state, action) => {
        state[action.payload].cartItems.push("Cart Item");
      },
    removeFromCart: (state, action) => {
        if (state[action.payload].cartItems.length > 0){
            state[action.payload].cartItems.pop();
        }
      },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
