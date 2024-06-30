import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "../src/redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CommentList from "./components/Comment/CommentList";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<CommentList />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
