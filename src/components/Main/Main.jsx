import React from "react";
import { Route, Routes } from "react-router-dom";
import * as S from "./Main.style";

import MainPage from "../../pages/MainPage/MainPage";
import FirstPage from "../../pages/FirstPage/FirstPage";
import SecondPage from "../../pages/SecondPage/SecondPage";
import Announcements from "../../pages/Announcements/Announcements";
import Attendance from "../../pages/Attendance/Attendance";
import Board from "../../pages/Board/Board";
import ClassContent from "../../pages/ClassContent/ClassContent";
import Complaints from "../../pages/Complaints/Complaints";
import Congratulations from "../../pages/Congratulations/Congratulations";
import Curriculum from "../../pages/Curriculum/Curriculum";
import FAQ from "../../pages/FAQ/FAQ";
import StudyGroups from "../../pages/StudyGroups/StudyGroups";
import StudentListPage from "../../components/StudentListPage/StudentListPage";
import StudentDetailPage from "../../components/StudentListPage/StudentDetailPage";

const Main = () => {
	return (
		<>
			<S.Container>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/student-list" element={<StudentListPage />} />
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
					<Route path="/FirstPage" element={<FirstPage />} />
					<Route path="/SecondPage" element={<SecondPage />} />
				</Routes>
			</S.Container>
		</>
	);
};

export default Main;
