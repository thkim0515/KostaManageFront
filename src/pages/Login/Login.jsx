import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userLoginSession";
import { handleLogin } from "../../utils/login";
import * as S from "./Login.style"; // 스타일 임포트

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const localAddress = useSelector((state) => state.localAddress.value);
  const userInfo = useSelector((state) => state.user.userInfo);

  const handleLoginClick = () => {
    handleLogin(username, password, dispatch, localAddress);
  };

	const handleLogout = () => {
		dispatch(logout());
	};

  const isAdmin = userInfo?.role === "Admin" || userInfo?.role === "Researcher";

  return (
    <div>
      {!user ? (
        <>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline-primary" onClick={handleLoginClick}>
            Login
          </Button>
        </>
      ) : (
        <>
          <p>로그인 아이디 : {user}</p>
          <p>JWT 토큰 : {token}</p>
          {userInfo && (
            <div>
              <p>이메일: {userInfo.email}</p>
              <p>전화번호: {userInfo.phoneNumber}</p>
              <p>역할: {userInfo.role}</p>
              <p>승인 상태: {userInfo.approvalStatus}</p>
              {isAdmin && <p>관리자 계정입니다.</p>}
            </div>
          )}
          <Button variant="outline-primary" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default Login;