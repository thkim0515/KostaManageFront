import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userLoginSession";
import { handleLogin } from "../../utils/login";
import * as S from "./Login.style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const localAddress = useSelector((state) => state.localAddress.value);

  const handleLoginClick = () => {
    handleLogin(username, password, dispatch, localAddress);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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
          <p>JWT 토큰 : {token}</p> {/* 토큰을 화면에 표시 */}
          <Button variant="outline-primary" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default Login;
