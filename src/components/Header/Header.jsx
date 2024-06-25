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
			<S.InnerContainer>
				<S.LogoContainer onClick={goToMainPage}>실거래 gogo</S.LogoContainer>
				<S.HeaderMenu>
					<S.MenuList>
						<S.MenuItem>
							<Link to="/MPrice">시세 보기</Link>
						</S.MenuItem>
						<S.MenuItem>
							<Link to="/FTalk">자유 대화</Link>
						</S.MenuItem>
						<S.MenuItem>
							<Link to="/VTraid">투자 해보기</Link>
						</S.MenuItem>
					</S.MenuList>
				</S.HeaderMenu>
				<S.Group>
					<S.Button onClick={goToLogin} className={S.LoginButton}>
						로그인
					</S.Button>
					<S.Button onClick={goToSignUp} className={S.SignUpButton}>
						회원가입
					</S.Button>
					<S.OverlapGroupWrapper>
						<S.OverlapGroup>
							<S.Rectangle
								name="searchBox"
								alt="SearchIcon"
								placeholder="검색어를 입력하세요"
							/>
							<S.SearchWrapper>
								<S.SearchIcon src="search-normal.svg" alt=" search" />
								<S.TextWrapper>Search</S.TextWrapper>
							</S.SearchWrapper>
						</S.OverlapGroup>
					</S.OverlapGroupWrapper>
				</S.Group>
			</S.InnerContainer>
		</S.Container>
	)
};

export default Header;
