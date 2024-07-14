import React from "react";
import * as S from "./Board.style";
import BoardList from "../../components/Common/Board/BoardList/BoardList";
import ContentHeader from "../../components/Common/ContentHeader/ContentHeader";
import boardTypeMapper from "../../utils/boardTypeMapper";

const Board = ({ BoardType }) => {
  const boardName = boardTypeMapper(BoardType);

  //boardName >> boardTypeMapper 함수를 통해 한글로 매핑
  //BoardType (props) >> 데이터베이스 컬럼 설정

  return (
    <S.Container>
      <S.Wrapper>
        <ContentHeader boardName={boardName} />
        <BoardList BoardType={BoardType} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Board;
