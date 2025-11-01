import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  fetchProfile,
  updateProfile,
  fetchSettings,
  updateSettings,
} from "../actions/authActions";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  settings: {},
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.access;
        localStorage.setItem("token", action.payload.access);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
