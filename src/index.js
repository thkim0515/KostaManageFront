<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client"; // createRoot를 포함한 새로운 API를 사용합니다.
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // createRoot 사용

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "../src/redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
>>>>>>> 63d11e362 (ADD:CRA, 라우팅, 리덕스 완성 오브젝트)
);
