import { createSlice, isAnyOf, isFulfilled } from '@reduxjs/toolkit';

import {
  userLogin,
  userLogout,
  userRegister,
  userGetCurrent,
} from './operation';

const userInitState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const isLogginedActions = isFulfilled(userLogin, userRegister);

const authSlice = createSlice({
  name: 'auth',
  initialState: userInitState,

  extraReducers: buider =>
    buider
      .addCase(userGetCurrent.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userGetCurrent.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(userGetCurrent.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(isLogginedActions), (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }),
});

export const authReduser = authSlice.reducer;
