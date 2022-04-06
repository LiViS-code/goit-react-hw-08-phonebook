import { createSlice } from '@reduxjs/toolkit';
import { signUpThunk, logInThunk, logOutThunk } from '../asyncThunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  extraReducers: {
    [signUpThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    [logInThunk.fulfilled]: (state, action) => {},
    [logOutThunk.fulfilled]: (state, action) => {},
  },
});

export default authSlice.reducer;
