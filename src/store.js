// store.js
import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './Controller/toggleSlice';
import shoppingCartReducer from './Controller/cartSlice';
import productSliceReducer from './Controller/productSlice';

export default configureStore({
  reducer: {
    toggleStates : toggleReducer,
    shoppingCart : shoppingCartReducer,
    productList: productSliceReducer,
  },
});
