import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  userInfo: null,
  isLoading: false,
  error: null,
};

const encodedKey = btoa("jwtToken");

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.checkUserName;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      state.isLoading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userInfo = null;
      state.error = null;
      localStorage.removeItem(encodedKey);
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } =
  userSlice.actions;

export default userSlice.reducer;
