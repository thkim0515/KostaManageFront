import React from "react";
import { Route, Routes } from "react-router-dom";
import * as S from "./Main.style";

import MainPage from "../../pages/MainPage/MainPage";
import FirstPage from "../../pages/FirstPage/FirstPage";
// import SecondPage from "../../pages/SecondPage/SecondPage";
import SideBar from "../Common/SideBar/SideBar";
import StudentListPage from "../StudentListPage/StudentListPage";
import Attendance from "../../pages/Attendance/Attendance";
import FAQPage from "../../pages/FAQ/FAQPage";
import Login from "../../pages/Login/Login";
const Main = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <SideBar />
      </S.Wrapper>
      <S.Content>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/student-list" element={<StudentListPage />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/student-list/starred"
            element={<StudentListPage category="starred" />}
          />
          <Route
            path="/student-list/pending"
            element={<StudentListPage category="pending" />}
          />
          <Route
            path="/student-list/blocked"
            element={<StudentListPage category="blocked" />}
          />
          <Route
            path="/student-list/engineers"
            element={<StudentListPage category="engineers" />}
          />
          <Route
            path="/student-list/support"
            element={<StudentListPage category="support" />}
          />
          <Route
            path="/student-list/sales"
            element={<StudentListPage category="sales" />}
          />{" "}
        </Routes>
      </S.Content>
    </S.Container>
  );
};

export default Main;
