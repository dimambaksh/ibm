// toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: 'toggleStates',
  initialState: [
    {name: 'sideMenu', toggleState: false},
  ],
  reducers: {
    toggleAction: (state, action) => {
        state[action.payload].toggleState = !state[action.payload].toggleState;
      },
  },
});

export const { toggleAction } = toggleSlice.actions;
export default toggleSlice.reducer;
