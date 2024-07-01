import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userLoginSession";
import { handleLogin } from "../../utils/login";
import * as S from "./Login.style"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    handleLogin(username, password, dispatch);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <S.Container>
      {!user ? (
        <S.Warrap>
          <S.Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.Input
            type="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.StyledButton onClick={handleLoginClick}>
            Login
          </S.StyledButton>
        </S.Warrap>
      ) : (
        <S.Warrap>
          <S.Paragraph>로그인 아이디 : {user}</S.Paragraph>
          <S.StyledButton onClick={handleLogout}>
            Logout
          </S.StyledButton>
        </S.Warrap>
      )}
    </S.Container>
  );
};

export default Login;
