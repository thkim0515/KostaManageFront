import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as S from "./Main.style";

import MainPage from "../../pages/MainPage/MainPage";
import FirstPage from "../../pages/FirstPage/FirstPage";
import SideBar from "../Common/SideBar/SideBar";
import StudentListPage from "../StudentListPage/StudentListPage";
import Attendance from "../../pages/Attendance/Attendance";
import FAQPage from "../../pages/FAQ/FAQPage";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import StudentManagePage from "../StudentManagePage/StudentManagePage";
import BranchManage from "../Common/BranchManage/BranchManage";
import EducationForm from "../EducationForm/EducationForm";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      </S.Wrapper>
      <S.Content isOpen={isOpen} isMobile={isMobile}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/student-list" element={<StudentListPage />} />
          <Route path="/student-managePage" element={<StudentManagePage />} />
          <Route path="/branch-managePage" element={<BranchManage />} />
          <Route path="/educationForm" element={<EducationForm />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/faq" element={<FAQPage />} />
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
          />
        </Routes>
      </S.Content>
    </S.Container>
  );
};

export default Main;
