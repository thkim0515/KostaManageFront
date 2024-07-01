import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./SideBar.style";
import { Home as HomeIcon, Book, FileText, Bookmark, MessageCircle, Settings } from "react-feather";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(location.pathname);

  const handleMenuClick = (path) => {
    setSelectedMenu(path);
  };

  const handleLogoClick = () => {
    setSelectedMenu("/");
    navigate("/");
  };

  return (
    <S.SideBarContainer>
      <S.Rectangle>
        <S.LeftBar>
          <nav>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/" onClick={() => handleMenuClick("/")}>
                  <S.MenuItem selected={selectedMenu === "/"}>
                    <S.MenuIcon as={HomeIcon} selected={selectedMenu === "/"} />
                    <S.MenuText active={selectedMenu === "/"}>Home</S.MenuText>
                  </S.MenuItem>
                </Link>
              </li>
              <li>
                <Link to="/classes" onClick={() => handleMenuClick("/classes")}>
                  <S.MenuItem selected={selectedMenu === "/classes"}>
                    <S.MenuIcon as={Book} selected={selectedMenu === "/classes"} />
                    <S.MenuText active={selectedMenu === "/classes"}>Classes</S.MenuText>
                  </S.MenuItem>
                </Link>
              </li>
              <li>
                <Link to="/documents" onClick={() => handleMenuClick("/documents")}>
                  <S.MenuItem selected={selectedMenu === "/documents"}>
                    <S.MenuIcon as={FileText} selected={selectedMenu === "/documents"} />
                    <S.MenuText active={selectedMenu === "/documents"}>Documents</S.MenuText>
                  </S.MenuItem>
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" onClick={() => handleMenuClick("/bookmarks")}>
                  <S.MenuItem selected={selectedMenu === "/bookmarks"}>
                    <S.MenuIcon as={Bookmark} selected={selectedMenu === "/bookmarks"} />
                    <S.MenuText active={selectedMenu === "/bookmarks"}>Bookmarks</S.MenuText>
                  </S.MenuItem>
                </Link>
              </li>
              <li>
                <Link to="/messages" onClick={() => handleMenuClick("/messages")}>
                  <S.MenuItem selected={selectedMenu === "/messages"}>
                    <S.MenuIcon as={MessageCircle} selected={selectedMenu === "/messages"} />
                    <S.MenuText active={selectedMenu === "/messages"}>Messages</S.MenuText>
                    <S.Badge>4</S.Badge>
                  </S.MenuItem>
                </Link>
              </li>
              <li>
                <Link to="/settings" onClick={() => handleMenuClick("/settings")}>
                  <S.MenuItem selected={selectedMenu === "/settings"}>
                    <S.MenuIcon as={Settings} selected={selectedMenu === "/settings"} />
                    <S.MenuText active={selectedMenu === "/settings"}>Settings</S.MenuText>
                  </S.MenuItem>
                </Link>
              </li>
            </ul>
          </nav>
        </S.LeftBar>
      </S.Rectangle>
    </S.SideBarContainer>
  );
};

export default SideBar;
