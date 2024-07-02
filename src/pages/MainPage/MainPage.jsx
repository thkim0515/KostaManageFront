import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../redux/actions/counter";
import * as S from "./MainPage.style";
import SignModul from "../../components/Sign/SignModul";
import Board from "../../components/Board/Board";


const MainPage = () => {
  const count = useSelector((state) => state.counter.count);
  const value = useSelector((state) => state.init.value);
  const user = useSelector((state) => state.user.user);
  const generationValue = useSelector((state) => state.generation.value);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <p>
        {value} - {generationValue} - {user}
        <Board />
      </p>
      <div>
        <h1>{count}</h1>
        <Button variant="outline-primary" onClick={() => dispatch(increase())}>
          증가
        </Button>{" "}
        <Button variant="outline-primary" onClick={() => dispatch(decrease())}>
          감소
        </Button>{" "}
      </div>
      <SignModul />
    </S.Container>
  );
};

export default MainPage;
