// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filterResult',
  initialState: {
    "productlist" : {"filter": ""},
    "cartlist" : { "filter": ""},
  },
  reducers: {
    filterResults: (state, action) => {
        console.log("Filter List.");
        let filterString = action.payload.filterString;
        
        console.log(action.payload.list+" -- Filter -- "+filterString);
        state[action.payload.list].filter = filterString;

        console.log("------------- End Filter -------------");
    },
  },
});

export const { filterResults } = filterSlice.actions;
export default filterSlice.reducer;
