import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userLoginSession";
import * as S from "./Header.style";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  const goToMain = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignUp = () => {
    navigate("/signUp");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.InnerLeft>
          <S.Logo onClick={goToMain}>
            <img src="/logo.png" alt="Logo" style={{ height: "60px" }} />
            <S.TextWrapper>KOSTA</S.TextWrapper>
          </S.Logo>
          {userInfo && (
            <S.UserInfo>
              <span>{userInfo.cohort.cohortNumber}기 - </span>
              <span>{userInfo.cohort.branchName}</span>
            </S.UserInfo>
          )}
        </S.InnerLeft>

        <S.Group>
          <S.InnerRight>
            {userInfo ? (
              <S.StyledButton onClick={handleLogout}>로그아웃</S.StyledButton>
            ) : (
              <>
                <S.StyledButton onClick={goToLogin}>로그인</S.StyledButton>
                <S.StyledButton onClick={goToSignUp}>회원가입</S.StyledButton>
              </>
            )}
          </S.InnerRight>
        </S.Group>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
