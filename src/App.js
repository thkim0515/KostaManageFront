import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ChatButton from "./components/Common/ChatButton/ChatButton";
import SideBar from "./components/SideBar/SideBar";
import StudentListPage from "./components/StudentListPage/StudentListPage";
import StudentDetailPage from "./components/StudentListPage/StudentDetailPage";
import ContactList from "./components/StudentListPage/ContactList";

// 임시 추가된 컴포넌트들
const Course = () => <div>Course Page</div>;
const Batch = () => <div>Batch Page</div>;
const Chat = () => <div>Chat Page</div>;
const Settings = () => <div>Settings Page</div>;
const Logout = () => <div>Logout Page</div>;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Header />
        <div className="main-layout" style={{ display: "flex" }}>
          <SideBar />
          <ContactList />
          <main className="content" style={{ display: "flex", flexDirection: 'column', flex: 1 }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/student-list" element={<StudentListPage />} />
              <Route path="/course" element={<Course />} />
              <Route path="/batch" element={<Batch />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/students/:id" element={<StudentDetailPage />} />
              <Route path="/student-list/starred" element={<StudentListPage category="starred" />} />
              <Route path="/student-list/pending" element={<StudentListPage category="pending" />} />
              <Route path="/student-list/blocked" element={<StudentListPage category="blocked" />} />
              <Route path="/student-list/engineers" element={<StudentListPage category="engineers" />} />
              <Route path="/student-list/support" element={<StudentListPage category="support" />} />
              <Route path="/student-list/sales" element={<StudentListPage category="sales" />} />
            </Routes>
            <ChatButton />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
