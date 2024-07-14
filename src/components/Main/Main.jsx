import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as S from "./Main.style";

import Board from "../../pages/Board/Board";
import MainPage from "../../pages/MainPage/MainPage";
import SideBar from "../Common/SideBar/SideBar";
import Attendance from "../../pages/Attendance/Attendance";
import FAQPage from "../../pages/FAQ/FAQPage";
import Login from "../../pages/Login/Login";
import SignUp from "../Common/SignUp/SignUp";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/attendance" element={<Attendance />} />

          <Route
            path="/board/curriculum"
            element={<Board BoardType="curriculum" />}
          />
          <Route
            path="/board/general"
            element={<Board BoardType="general" />}
          />
          <Route
            path="/board/classContents"
            element={<Board BoardType="classContents" />}
          />
          <Route
            path="/board/congratulations"
            element={<Board BoardType="congratulations" />}
          />
          <Route
            path="/board/announcements"
            element={<Board BoardType="announcements" />}
          />

          <Route
            path="/board/complaints"
            element={<Board BoardType="complaints" />}
          />
          <Route
            path="/board/studyGroup"
            element={<Board BoardType="studyGroup" />}
          />

          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </S.Content>
    </S.Container>
  );
};

export default Main;
