import React from "react";
import * as S from "./ContentHeader.style";

const ContentHeader = ({ boardName }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <div>{boardName} 게시판 </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default ContentHeader;
