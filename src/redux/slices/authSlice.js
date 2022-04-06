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
    [signUpThunk.fulfilled]: (state, { user, token, isLoggedIn }) => {
      state.user = user;
      state.token = token;
      state.isLoggedIn = isLoggedIn;
    },
    [logInThunk.fulfilled]: (state, action) => {},
    [logOutThunk.fulfilled]: (state, action) => {},
  },
});

export default authSlice.reducer;
