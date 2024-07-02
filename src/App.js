import React from "react";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ChatButton from "./components/Common/ChatButton/ChatButton";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import StudentListPage from "./components/StudentListPage/StudentListPage";
import StudentDetailPage from "./components/StudentDetailPage/StudentDetailPage";

// 임시 추가된 컴포넌트들
const Course = () => <div>Course Page</div>;
const Batch = () => <div>Batch Page</div>;
const Chat = () => <div>Chat Page</div>;
const Settings = () => <div>Settings Page</div>;
const Logout = () => <div>Logout Page</div>;

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="app">
				<Header />
				<div className="main-layout" style={{ display: "flex" }}>
					<SideBar /> {/* SideBar 추가 */}
					<main className="content" style={{ display: "flex", flex: 1 }}>
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/student-list" element={<StudentListPage />} />
							<Route path="/course" element={<Course />} />
							<Route path="/batch" element={<Batch />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="/students/:id" element={<StudentDetailPage />} />
						</Routes>
						<ChatButton />
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
