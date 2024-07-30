// store.js
import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './Controller/toggleSlice';
import shoppingCartReducer from './Controller/cartSlice';

export default configureStore({
  reducer: {
    toggleStates : toggleReducer,
    shoppingCart : shoppingCartReducer,
  },
});
