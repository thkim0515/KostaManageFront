import axios from "axios";
import {
  loginStart,
  loginFail,
  loginSuccess,
} from "../redux/actions/userLoginSession";

/** 로그인 핸들러 */
export const handleLogin = async (
  getUserName,
  getUserPassword,
  dispatch,
  localAddress
) => {
  dispatch(loginStart());

  try {
    const response = await axios.post(`${localAddress}auth/login`, {
      name: getUserName,
      password: getUserPassword,
    });

    const token = response.data;

    const encodedKey = btoa("jwtToken");

    localStorage.setItem(encodedKey, token);

    const userResponse = await axios.get(
      `${localAddress}users/name/${getUserName}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // const cohort_id = userResponse.data.cohortId;

    // const cohortsResponse = await axios.get(
    //   `${localAddress}cohorts/get/${cohort_id}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    // console.log(cohortsResponse.data);
    const isAdmin =
      userResponse.data.role === "Admin" ||
      userResponse.data.role === "Researcher";

    dispatch(
      loginSuccess({
        checkUserName: getUserName,
        token: token,
        userInfo: userResponse.data,
        isAdmin: isAdmin,
      })
    );
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(loginFail(error.response.data));
    } else {
      dispatch(loginFail("로그인 실패"));
    }
  }
};
