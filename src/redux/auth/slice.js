import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.token = null;
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
