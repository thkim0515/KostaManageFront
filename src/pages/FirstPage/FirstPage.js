import React from "react";
import * as S from "./FirstPage.style";
import BranchManage from "../../components/Common/BranchManage/BranchManage";
const FirstPage = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <BranchManage />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
export default FirstPage;
