// toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: 'toggleStates',
  initialState: [
    {name: 'sideMenu', toggleState: false},
    {name: 'cartItems', toggleState: false},
    {name: 'checkoutScreen', toggleState: false},
    {name: 'showCategory', toggleState: false},
    {name: 'pageLoading', toggleState: true},
  ],
  reducers: {
    toggleAction: (state, action) => {
      console.log("Toggle"+action.payload);
      console.log(action);
      state[action.payload].toggleState = !state[action.payload].toggleState;
      console.log("Current: "+state[3].toggleState);
    },
  },
});

export const { toggleAction } = toggleSlice.actions;
export default toggleSlice.reducer;
