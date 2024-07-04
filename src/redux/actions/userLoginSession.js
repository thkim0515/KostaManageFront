import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      // console.log("로그인 스타트");
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      // console.log("로그인 성공");
      console.log("로그인 스타트");
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      console.log("로그인 성공");
      state.user = action.payload.checkUserName;
      state.isLoading = false;
      state.error = null;
      // sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    loginFail: (state, action) => {
      // console.log("로그인 실패");
      console.log("로그인 실패");
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      // console.log("로그아웃");
      console.log("로그아웃");
      state.user = null;
      state.error = null;
      // sessionStorage.removeItem("userInfo");
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } =
  userSlice.actions;

export default userSlice.reducer;
