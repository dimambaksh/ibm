// toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: 'toggleStates',
  initialState: {
    'sideMenu':  false,
    'cartItems': false,
    'checkoutScreen': false,
    'showCategory': false,
    'pageLoading': true,
    'landingPage': true,
    'aboutUs': false,
    'productList': true,
  },
  reducers: {
    toggleAction: (state, action) => {
      console.log("--- Toggle ---");
      console.log(action);
      state[action.payload] = !state[action.payload];
      console.log("--------------");
    },
  },
});

export const { toggleAction } = toggleSlice.actions;
export default toggleSlice.reducer;
