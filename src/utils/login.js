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
    // 임시 로그인
    const adminUser = {
      username: "admin",
      password: "admin",
    };

    if (
      getUserName === adminUser.username &&
      getUserPassword === adminUser.password
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

    // const response = await axios.post("엔드포인트", {파라미터});
    // if (response === 200) {
    //   dispatch(loginSuccess(username));
    // } else {
    //    dispatch(loginFail("아이디 패스워드 다름"));
    // }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(loginFail(error.response.data));
    } else {
      dispatch(loginFail("로그인 실패"));
    }
  }
};
