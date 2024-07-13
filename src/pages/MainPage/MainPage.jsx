import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../redux/actions/counter";
import CommentPage from "../CommentPage/CommentPage";
import * as S from "./MainPage.style";
const MainPage = () => {
  const count = useSelector((state) => state.counter.count);
  const value = useSelector((state) => state.init.value);
  const user = useSelector((state) => state.user.user);
  const generationValue = useSelector((state) => state.generation.value);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <CommentPage />
    </S.Container>
  );
};

export default MainPage;
