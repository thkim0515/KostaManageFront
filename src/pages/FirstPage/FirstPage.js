import React from "react";
import * as S from "./FirstPage.style";
import StudentListPage from "../../components/StudentListPage/StudentListPage";
import CommentPage from "../CommentPage/CommentPage";
import FileUploadComponent from "../../components/Common/FileUpload/FileUpload";
import Board from "../../components/Common/Board/Board/Board";
const FirstPage = () => {
	const count = useSelector((state) => state.counter.count);
	const user = useSelector((state) => state.user.user);

  return (
    <>
      <S.Container>
        <h1>{count}</h1>
        <div>페이지1</div>
        <h1>{user}</h1>
        <br />
        {/* <SignUp /> */}
      </S.Container>
    </>
  );
};
export default FirstPage;