import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const navigate = useNavigate();

  const goToMain = () => {
		navigate("/");
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
							<S.OverlapGroup>
								<S.Rectangle
									name="searchBox"
									alt="SearchIcon"
									placeholder="검색어를 입력하세요"
								/>
								<S.SearchWrapper></S.SearchWrapper>
							</S.OverlapGroup>
						</S.Overlap>
					</S.InnerRight>
				</S.Group>
			</S.Wrapper>
		</S.Container>
	);
};

export default Header;
