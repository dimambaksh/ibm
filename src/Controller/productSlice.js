import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "productList",
    initialState: [
        {
            img: "./ibm/001-forgetmenot.svg",
            name: "Forget me not",
            cost: 200,
            quantity: 0,
        },
        {
            img: "./ibm/002-snowdrop.svg",
            name: "Snowdrop",
            cost: 35,
            quantity: 0,
        },
    ],


    reducers: {
        increaseProductQuantity: (state, action) => {
            console.log("Increase: "+state+" - "+action);
            const item = state[action.payload];
            if (item) {
                item.quantity++;
            }
        },
        reduceProductQuantity: (state, action) => {
            console.log("Decrease: "+state+" - "+action);
            const item = state[action.payload];
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
    },
});

export const { increaseProductQuantity, reduceProductQuantity } = productSlice.actions;

export default productSlice.reducer;