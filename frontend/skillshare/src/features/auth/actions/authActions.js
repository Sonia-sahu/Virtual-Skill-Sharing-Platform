import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials) => {
    const res = await API.post("/users/login/", credentials);
    return res.data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data) => {
    const res = await API.post("/users/register/", data);
    return res.data;
  }
);

export const fetchProfile = createAsyncThunk("auth/fetchProfile", async () => {
  const res = await API.get("/users/profile/");
  return res.data;
});

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (data) => {
    const res = await API.put("/users/profile/", data);
    return res.data;
  }
);

export const fetchSettings = createAsyncThunk(
  "auth/fetchSettings",
  async () => {
    const res = await API.get("/users/settings/");
    return res.data;
  }
);

export const updateSettings = createAsyncThunk(
  "auth/updateSettings",
  async (data) => {
    const res = await API.put("/users/settings/", data);
    return res.data;
  }
);
