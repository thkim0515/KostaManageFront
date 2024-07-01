import React from "react";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ChatButton from "./components/Common/ChatButton/ChatButton";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// 임시 추가된 컴포넌트들 (실제로는 독립된 파일로 구성)
const StudentList = () => <div>Student List Page</div>;
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
				<div className="main-layout">
					<SideBar />
					<main className="content">
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/student-list" element={<StudentList />} />
							<Route path="/course" element={<Course />} />
							<Route path="/batch" element={<Batch />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/logout" element={<Logout />} />
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
