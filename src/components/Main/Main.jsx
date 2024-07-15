import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as S from "./Main.style";
import { useSelector } from "react-redux";

import Board from "../../pages/Board/Board";
import BoardCreate from "./../Common/Board/BoardCreate/BoardCreate";
import BoardDetail from "./../Common/Board/BoardDetail/BoardDetail"; // BoardDetail 추가
import MainPage from "../../pages/MainPage/MainPage";
import SideBar from "../Common/SideBar/SideBar";
import Attendance from "../../pages/Attendance/Attendance";
import FAQPage from "../../pages/FAQ/FAQPage";
import Login from "../../pages/Login/Login";
import SignUp from "../Common/SignUp/SignUp";
import ResearcherMenu from "../Common/ResearcherMenu/ResearcherMenu";

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
					<Route path="/secondPage" element={<SecondPage />} />
					<Route path="/student-list" element={<StudentListPage />} />
					<Route path="/student-managePage" element={<StudentManagePage />} />
					<Route path="/branch-managePage" element={<BranchManage />} />
					<Route path="/educationForm" element={<EducationForm />} />
					<Route path="/attendance" element={<Attendance />} />
					<Route path="/curriculum" element={<Curriculum />} />
					<Route path="/board" element={<Board />} />
					<Route path="/class-content" element={<ClassContent />} />
					<Route path="/congratulations" element={<Congratulations />} />
					<Route path="/announcements" element={<Announcements />} />
					<Route path="/complaints" element={<Complaints />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/study-groups" element={<StudyGroups />} />
					<Route path="/students/:id" element={<StudentDetailPage />} />
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
