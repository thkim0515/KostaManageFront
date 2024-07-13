import React from "react";
import * as S from "./FirstPage.style";
import StudentListPage from "../../components/StudentListPage/StudentListPage";
import CommentPage from "../CommentPage/CommentPage";
import FileUploadComponent from "../../components/Common/FileUpload/FileUpload";
import Board from "../../components/Common/Board/Board/Board";
const FirstPage = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Board />
          <FileUploadComponent />
          <CommentPage />
          <StudentListPage />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
export default FirstPage;
