import React from "react";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import ChatButton from "./components/Common/ChatButton/ChatButton"
import { Routes, Route } from "react-router-dom";
import MPrice from "./pages/MPrice/MPrice";
import FTalk from "./pages/FTalk/FTalk";
import VTraid from "./pages/VTraid/VTraid";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="app">
				<Header />
				<main className="content">
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/MainPage" element={<MainPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/MPrice" element={<MPrice />} />
						<Route path="/FTalk" element={<FTalk />} />
						<Route path="/VTraid" element={<VTraid />} />
					</Routes>
					<ChatButton />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
