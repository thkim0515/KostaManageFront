import React from "react";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ChatButton from "./components/Common/ChatButton/ChatButton";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="app">
				<Header />
				<main className="content">
					<SideBar />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/MainPage" element={<MainPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
					</Routes>
					<ChatButton />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
