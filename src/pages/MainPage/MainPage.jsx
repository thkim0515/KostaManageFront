import React from "react";
import * as S from "./MainPage.style";
import Settings from "../Settings/Settings";

const MainPage = () => {
  return (
    <S.Container>
      <div>컴포넌트 테스트는 이 컴포넌트에서 진행</div>
      <Settings />
    </S.Container>
  );
};

export default MainPage;
