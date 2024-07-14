import React from "react";
import * as S from "./Board.style";
import BoardList from "../../components/Common/Board/BoardList/BoardList";
import ContentHeader from "../../components/Common/ContentHeader/ContentHeader";
import boardTypeMapper from "../../utils/boardTypeMapper";

const Board = ({ BoardType }) => {
  const boardName = boardTypeMapper(BoardType);

  return (
    <S.Container>
      <S.Wrapper>
        <div>{BoardType}</div>
        <ContentHeader boardName={boardName} />
        <BoardList />
      </S.Wrapper>
    </S.Container>
  );
};

export default Board;
