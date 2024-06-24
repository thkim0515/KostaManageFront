import React from "react";
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
              <Link to="/FirstPage">서브1</Link>
            </li>
            <li>
              <Link to="/SecondPage">서브2</Link>
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
