import React from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
	const navigate = useNavigate();

	const goToMain = () => {
		navigate("/mainpage");
	};

	const goToLogin = () => {
		navigate("/login");
	};

	const goToSignUp = () => {
		navigate("/signUp");
	};

	return (
		<S.Container>
			<S.Wrapper>
				<S.InnerLeft>
					<S.Logo onClick={goToMain}>
						<img src="/logo.png" alt="Logo" style={{ height: "60px" }} />
						<S.TextWrapper>KOSTA</S.TextWrapper>
					</S.Logo>
				</S.InnerLeft>
				<S.Group>
					<S.InnerRight>
						<S.StyledButton onClick={goToLogin}>로그인</S.StyledButton>
						<S.StyledButton onClick={goToSignUp}>회원가입</S.StyledButton>
						<S.Overlap>
							{" "}
							<S.OverlapGroup>
								<S.Rectangle
									name="searchBox"
									alt="SearchIcon"
									placeholder="검색어를 입력하세요"
								/>
								<S.SearchWrapper>
									{/*<S.SearchIcon src="search-normal.svg" alt="search" />*/}
								</S.SearchWrapper>
							</S.OverlapGroup>
						</S.Overlap>
					</S.InnerRight>
				</S.Group>
			</S.Wrapper>
		</S.Container>
	);
=======
import { Link } from "react-router-dom";
import * as S from "./Header.style";
import Login from "../../pages/Login/Login";

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Nav>
          <ul>
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>
              <Link to="/Page">서브1</Link>
            </li>
            <li>
              <Link to="/Page2">서브2</Link>
            </li>
          </ul>
        </S.Nav>
      </S.Wrapper>
      <S.Wrapper>
        <Login />
      </S.Wrapper>
    </S.Container>
  );
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)
};

export default Header;
