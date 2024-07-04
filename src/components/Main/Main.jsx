import React from "react";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";

import MainPage from "../../pages/MainPage/MainPage";
import FirstPage from "../../pages/FirstPage/FirstPage";
import SecondPage from "../../pages/SecondPage/SecondPage";

import * as S from "./Main.style";
=======
import * as S from "./Main.style";
import MainPage from "../../pages/MainPage";
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)

const Main = () => {
  return (
    <>
      <S.Container>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
=======
        <MainPage />
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)
      </S.Container>
    </>
  );
};

export default Main;
