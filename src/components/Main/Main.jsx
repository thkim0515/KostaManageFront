import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../../pages/MainPage/MainPage";
import FirstPage from "../../pages/FirstPage/FirstPage";
import SecondPage from "../../pages/SecondPage/SecondPage";
import ChartPage from "../../pages/ChartPage/ChartPage";

import * as S from "./Main.style";

const Main = () => {
  return (
    <>
      <S.Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
      </S.Container>
    </>
  );
};

export default Main;
