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
    <S.Container>
      <S.Group>
        {!user ? (
          <>
            <S.LoginField>
              <S.Input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </S.LoginField>
            <S.LoginField>
              <S.Input
                type="password"
                placeholder="패스워드"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.LoginField>
            <S.StyledButton onClick={handleLoginClick}>Login</S.StyledButton>
          </>
        ) : (
          <>
            <S.Paragraph>로그인 아이디 : {user}</S.Paragraph>
            <S.Paragraph>JWT 토큰 : {token}</S.Paragraph>
            {userInfo && (
              <div>
                <S.Paragraph>이메일: {userInfo.email}</S.Paragraph>
                <S.Paragraph>전화번호: {userInfo.phoneNumber}</S.Paragraph>
                <S.Paragraph>역할: {userInfo.role}</S.Paragraph>
                <S.Paragraph>승인 상태: {userInfo.approvalStatus}</S.Paragraph>
                {isAdmin ? <S.Paragraph>관리자 계정입니다</S.Paragraph> : null}
              </div>
            )}
            <S.StyledButton onClick={handleLogout}>Logout</S.StyledButton>
          </>
        )}
      </S.Group>
    </S.Container>
  );
};

export default Login;
