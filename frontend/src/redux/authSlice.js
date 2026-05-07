import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLogin: !!token,
  user: user || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.isLogin = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
