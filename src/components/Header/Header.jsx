import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.style";
import Login from "../../pages/Login/Login";

const Header = () => {
  return (
		<S.Container>
			<S.Wrapper>
				<S.Logo>
					<a href="#home">
						<img src="path/to/logo.png" alt="멍게멍게 로고" />
					</a>
				</S.Logo>
				<S.Nav>
					<ul>
						<li>
							<Link to="/mbti">MBTI</Link>
						</li>
						<li>
							<Link to="/adoption">입양 하기</Link>
						</li>
						<li>
							<Link to="/reviews">입양 후기</Link>
						</li>
						<li>
							<Link to="/inquiry">문의 하기</Link>
						</li>
					</ul>
				</S.Nav>
			</S.Wrapper>
			<S.Wrapper>
				<S.Actions>
					<Login />
					<S.Button>회원가입</S.Button>
					<S.Search>
						<input type="text" placeholder="Search" />
					</S.Search>
				</S.Actions>
			</S.Wrapper>
		</S.Container>
	)
};

export default Header;
