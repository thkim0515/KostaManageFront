import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
	const navigate = useNavigate();

	const goToMainPage = () => {
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
			<S.Inner>
				<S.Logo onClick={goToMainPage}>실거래 gogo</S.Logo>
				<S.HeaderMenu>
					<S.Menu>
						<Link to="/MPrice">시세 보기</Link>
					</S.Menu>
					<S.Menu>
						<Link to="/FTalk">자유 대화</Link>
					</S.Menu>
					<S.Menu>
						<Link to="/VTraid">투자 해보기</Link>
					</S.Menu>
				</S.HeaderMenu>
				<S.Group>
					<S.StyledButton onClick={goToLogin}>로그인</S.StyledButton>
					<S.StyledButton onClick={goToSignUp}>회원가입</S.StyledButton>
					<S.Overlap>
						<S.OverlapGroup>
							<S.Rectangle
								name="searchBox"
								alt="SearchIcon"
								placeholder="검색어를 입력하세요"
							/>
							<S.SearchWrapper>
								<S.SearchIcon src="search-normal.svg" alt=" search" />
							</S.SearchWrapper>
						</S.OverlapGroup>
					</S.Overlap>
				</S.Group>
			</S.Inner>
		</S.Container>
	);
};

export default Header;
