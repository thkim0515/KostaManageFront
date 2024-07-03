import React from "react";

import { useSelector } from "react-redux";
import * as S from "./FirstPage.style";
import SignUp from "../SignUp/SignUp";
import ChartComponent from "../../components/Chart/ChartComponent";
import Board from "../../components/Board/Board";

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
        <Board />
      </S.Container>
    </>
  );
};
export default FirstPage;
