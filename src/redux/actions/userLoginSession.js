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
			console.log("로그인 성공");
			state.user = action.payload.checkUserName;
			state.isLoading = false;
			state.error = null;
		},
		loginFail: (state, action) => {
			console.log("로그인 실패");
			state.isLoading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			console.log("로그아웃");
			state.user = null;
			state.error = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFail, logout } =
	userSlice.actions;

export default userSlice.reducer;
