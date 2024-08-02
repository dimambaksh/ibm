// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState: [{name: 'currentCart', cartItems: {}, cartSize: 0, cartTotal: 0}],
  reducers: {
    addToCart: (state, action) => {
      if (state[0].cartItems[action.payload.id]){
        state[0].cartItems[action.payload.id].quantity++;
      }
      else{
        state[0].cartItems[action.payload.id] = {"productID" : action.payload.id, "productItem" : action.payload, "quantity" : 1};
      }
      state[0].cartTotal += state[0].cartItems[action.payload.id].productItem.cost;
      state[0].cartSize++;
      console.log("add to cart: "+state[0].cartSize);
    },
    removeFromCart: (state, action) => {
        console.log(state[0].cartItems);
        if (state[0].cartItems[action.payload.id]){

          if (state[0].cartItems[action.payload.id].quantity > 0){
            state[0].cartItems[action.payload.id].quantity--;
            state[0].cartTotal -= state[0].cartItems[action.payload.id].productItem.cost;
            state[0].cartSize--;
          }

          if (state[0].cartItems[action.payload.id].quantity === 0){
            delete state[0].cartItems[action.payload.id];
          }
          console.log("remove from cart: "+state[0].cartSize);
        }
    },
    deleteFromCart: (state, action) => {
      console.log(state[0].cartItems);
      if (state[0].cartItems[action.payload.id]){
        if (state[0].cartItems[action.payload.id].quantity > 0){
          state[0].cartTotal -= (state[0].cartItems[action.payload.id].productItem.cost * state[0].cartItems[action.payload.id].quantity);
          state[0].cartSize -= state[0].cartItems[action.payload.id].quantity;
          delete state[0].cartItems[action.payload.id];
        }
        console.log("delete from cart");
      }
  }
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;