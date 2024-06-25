import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { S } from "./Header.style"

const Header = () => {
  const navigate = useNavigate()

	const goToMainPage = () => {
		navigate("/mainpage")
	}

	const goToLogin = () => {
		navigate("/login")
	}

	const goToSignUp = () => {
		navigate("/signUp")
	}

  return (
    <S.Container>
      <S.Wrapper>
        <S.Nav>
          <ul>
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>
              <Link to="/FirstPage">서브1</Link>
            </li>
            <li>
              <Link to="/SecondPage">서브2</Link>
              <Link to="/firstPage">테스트</Link>
            </li>
          </ul>
        </S.Nav>
      </S.Wrapper>
      <S.Wrapper>
        <Login />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
