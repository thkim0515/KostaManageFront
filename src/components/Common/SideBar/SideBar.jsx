import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./SideBar.style";
import {
  Home as Info,
  Bookmark,
  MessageCircle,
  Bluetooth,
  Code,
  Flag,
  AlertCircle,
  Folder,
  Gift,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

const SideBar = ({ isAdmin }) => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(true);
  const [isFullyOpen, setIsFullyOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sidebarRef = useRef(null);

  const handleMenuClick = (path) => {
    setSelectedMenu(path);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsFullyOpen(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsFullyOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  const menuItems = isAdmin
    ? [{ path: "/students", icon: Bookmark, label: "학생 관리" }]
    : [
        { path: "/attendance", icon: Bluetooth, label: "출결" },
        { path: "/board/curriculum", icon: Flag, label: "커리큘럼" },
        { path: "/board/general", icon: Folder, label: "통합게시판" },
        { path: "/board/classContents", icon: Code, label: "수업내용" },
        { path: "/board/congratulations", icon: Gift, label: "축하해주세요!" },
        { path: "/board/announcements", icon: AlertCircle, label: "공지사항" },
        { path: "/board/complaints", icon: MessageCircle, label: "민원게시판" },
        { path: "/board/studyGroup", icon: Bookmark, label: "스터디모집" },
        { path: "/faq", icon: Info, label: "FAQ게시판" },
      ];

  return (
    <S.SideBarContainer ref={sidebarRef} isOpen={isOpen}>
      <S.Rectangle>
        <S.LeftBar>
          <S.TopToggleButton onClick={handleToggle}>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </S.TopToggleButton>
          <nav>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {menuItems.map((item, index) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => handleMenuClick(item.path)}
                  >
                    <S.MenuItem
                      selected={selectedMenu === item.path}
                      isOpen={isOpen}
                    >
                      <S.MenuIcon
                        as={item.icon}
                        selected={selectedMenu === item.path}
                        isOpen={isOpen}
                      />
                      <S.MenuText
                        active={selectedMenu === item.path}
                        isOpen={isOpen}
                        isFullyOpen={isFullyOpen}
                      >
                        {item.label}
                      </S.MenuText>
                    </S.MenuItem>
                  </Link>
                  {item.path === "/faq" && (
                    <S.ListItem>
                      <S.BottomToggleButton onClick={handleToggle}>
                        {isOpen ? (
                          <ChevronLeft size={32} />
                        ) : (
                          <ChevronRight size={32} />
                        )}
                      </S.BottomToggleButton>
                    </S.ListItem>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </S.LeftBar>
      </S.Rectangle>
    </S.SideBarContainer>
  );
};

export default SideBar;
