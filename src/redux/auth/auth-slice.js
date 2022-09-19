import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending]: state => {
      state.loading = true;
    },
    [authOperations.register.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = false;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [authOperations.login.pending]: state => {
      state.loading = true;
    },
    [authOperations.login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = false;
    },
    [authOperations.login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
