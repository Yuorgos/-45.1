import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import counterReducer from './slices/counterSlice'; 

export const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer, 
  },
});