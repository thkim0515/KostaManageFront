import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../redux/actions/counter";
import BoardDetail from "../../components/BoardDetail/BoardDetail";
import * as S from "./MainPage.style";
import BoardUpdate from "../../components/BoardUpdate/BoardUpdate";
import BoardCreate from "../../components/BoardCreate/BoardCreate";
import Board from "../../components/Board/Board";
const MainPage = () => {
  const count = useSelector((state) => state.counter.count);
  const value = useSelector((state) => state.init.value);
  const user = useSelector((state) => state.user.user);
  const generationValue = useSelector((state) => state.generation.value);
  const dispatch = useDispatch();

  return (
    <BoardDetail />
  );
};

export default MainPage;
