import GlobalStyle from "./style/globalStyle";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ChatButton from "./components/Common/ChatButton/ChatButton";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="app">
				<Header />
				<main className="content">
					<Routes>
						<Route path="/*" element={<Main />} />
					</Routes>
					<ChatButton />
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
