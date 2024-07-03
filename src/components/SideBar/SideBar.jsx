import { useState } from "react";
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
} from "react-feather";

const SideBar = () => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(location.pathname);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (path) => {
    setSelectedMenu(path);
    setActiveMenu(activeMenu === path ? null : path); // 메뉴 아이템이 이미 활성화되었는지 확인
  };

  const menuItems = [
    { path: "/attendance", icon: Bluetooth, label: "출결", subItems: ["Sub Item 1", "Sub Item 2"] },
    { path: "/curriculum", icon: Flag, label: "커리큘럼", subItems: ["Sub Item 3", "Sub Item 4"] },
    { path: "/board", icon: Folder, label: "통합게시판", subItems: ["Sub Item 5", "Sub Item 6"] },
    { path: "/class-content", icon: Code, label: "수업내용", subItems: ["Sub Item 7", "Sub Item 8"] },
    { path: "/congratulations", icon: Gift, label: "축하해주세요!", subItems: ["Sub Item 9", "Sub Item 10"] },
    { path: "/announcements", icon: AlertCircle, label: "공지사항", subItems: ["Sub Item 11", "Sub Item 12"] },
    { path: "/complaints", icon: MessageCircle, label: "민원게시판", subItems: ["Sub Item 13", "Sub Item 14"] },
    { path: "/study-groups", icon: Bookmark, label: "스터디모집", subItems: ["Sub Item 15", "Sub Item 16"] },
    { path: "/faq", icon: Info, label: "FAQ게시판", subItems: ["Sub Item 17", "Sub Item 18"] },
  ];

  return (
    <S.SideBarContainer>
      <S.Rectangle>
        <S.LeftBar>
          <nav>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => handleMenuClick(item.path)}>
                    <S.MenuItem selected={selectedMenu === item.path}>
                      <S.MenuIcon as={item.icon} selected={selectedMenu === item.path} />
                      <S.MenuText active={selectedMenu === item.path}>{item.label}</S.MenuText>
                    </S.MenuItem>
                  </Link>
                  {activeMenu === item.path &&
                    item.subItems.map((subItem, index) => (
                      <S.SubMenuItem key={index}>{subItem}</S.SubMenuItem>
                    ))}
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
