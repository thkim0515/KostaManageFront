import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFail,
} from "../redux/actions/userLoginSession";

/** 로그인 핸들러 */
export const handleLogin = async (getUserName, getUserPassword, dispatch) => {
  dispatch(loginStart());

  try {
    const response = await axios.get(
      `http://localhost:8080/users/get/${getUserName}`
    );
    const userInfo = response.data;

    if (
      getUserName === userInfo.userId &&
      getUserPassword === userInfo.userPassword
    ) {
      dispatch(
        loginSuccess({
          checkUserName: getUserName,
          checkUserPassword: getUserPassword,
        })
      );
    } else {
      dispatch(loginFail("아이디 패스워드 다름"));
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(loginFail(error.response.data));
    } else {
      dispatch(loginFail("로그인 실패"));
    }
  }
};
