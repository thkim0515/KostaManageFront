import React from "react";
import * as S from "./MainPage.style";
import ResearcherMenu from "../../components/Common/ResearcherMenu/ResearcherMenu";
import EducationForm from "../../components/EducationForm/EducationForm";
const MainPage = () => {
  return (
    <S.Container>
      <div>컴포넌트 테스트는 이 컴포넌트에서 진행</div>
      <ResearcherMenu />
      <EducationForm />
    </S.Container>
  );
};

export default MainPage;
