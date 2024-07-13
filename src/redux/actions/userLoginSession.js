import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null, // 토큰 상태 추가
  isLoading: false,
  error: null,
};

// 키 값을 Base64로 인코딩
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
      state.token = action.payload.token; // 토큰 저장
      console.log(state.token);
      state.isLoading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null; // 토큰 제거
      state.error = null;
      localStorage.removeItem(encodedKey);
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } =
  userSlice.actions;

export default userSlice.reducer;
