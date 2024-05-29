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

export default App;
