import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import contactSlices from './slices/contactSlices';

export const store = configureStore({
  reducer: {
    authUser: authSlice,
    phonebook: contactSlices,
  },
});
