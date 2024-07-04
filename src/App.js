<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ChatButton from "./components/Common/ChatButton/ChatButton";
import SideBar from "./components/SideBar/SideBar";
import StudentListPage from "./components/StudentListPage/StudentListPage";
import StudentDetailPage from "./components/StudentListPage/StudentDetailPage";
//import ContactList from "./components/StudentListPage/ContactList";

// 실제 컴포넌트들
import Attendance from "./pages/Attendance/Attendance";
import Curriculum from "./pages/Curriculum/Curriculum";
import Board from "./pages/Board/Board";
import ClassContent from "./pages/ClassContent/ClassContent";
import Congratulations from "./pages/Congratulations/Congratulations";
import Announcements from "./pages/Announcements/Announcements";
import Complaints from "./pages/Complaints/Complaints";
import FAQ from "./pages/FAQ/FAQ";
import StudyGroups from "./pages/StudyGroups/StudyGroups";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<div className="app">
				<Header />
				<div className="main-layout" style={{ display: "flex" }}>
					<SideBar />
					{/*<ContactList />*/}
					<main
						className="content"
						style={{ display: "flex", flexDirection: "column", flex: 1 }}
					>
						<Routes>
							<Route path="/" element={<Main />} />
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
						</Routes>
						<ChatButton />
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
};
=======
import GlobalStyle from "./style/globalStyle";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Page" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)

export default App;
