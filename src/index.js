import React from "react";
import ReactDOM from "react-dom/client"; // 새로운 API를 사용합니다.
import { Provider } from "react-redux"; // Redux Provider를 가져옵니다.
import { BrowserRouter } from "react-router-dom"; // React Router를 가져옵니다.
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS 불러오기.
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/store"; // Redux store를 가져옵니다.

// 새로운 API를 사용하여 root 요소를 가져옵니다.
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render 함수.
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// Optional: 웹 성능 측정 함수.
reportWebVitals();
