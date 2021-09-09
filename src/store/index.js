import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './couterSlice';
import favReducer from './favSlice';
import cartReducer from './addCart';
import userReducer from './userAction';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fav: favReducer,
    item: cartReducer,
    userAction: userReducer,
  },
});

