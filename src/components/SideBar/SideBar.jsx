import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./SideBar.style";
import { Home as HomeIcon, Info, Bookmark, MessageCircle, Bluetooth, Code, Flag, AlertCircle, Folder, Gift} from "react-feather";

const SideBar = () => {
  const location = useLocation();
  //const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(location.pathname);

  const handleMenuClick = (path) => {
    setSelectedMenu(path);
  };

  return (
		<S.SideBarContainer>
			<S.Rectangle>
				<S.LeftBar>
					<nav>
						<ul style={{ listStyleType: "none", padding: 0 }}>
							<li>
								<Link to="/" onClick={() => handleMenuClick("/")}>
									<S.MenuItem selected={selectedMenu === "/"}>
										<S.MenuIcon as={HomeIcon} selected={selectedMenu === "/"} />
										<S.MenuText active={selectedMenu === "/"}>Home</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link
									to="/attendance"
									onClick={() => handleMenuClick("/attendance")}
								>
									<S.MenuItem selected={selectedMenu === "/attendance"}>
										<S.MenuIcon
											as={Bluetooth}
											selected={selectedMenu === "/attendance"}
										/>
										<S.MenuText active={selectedMenu === "/attendance"}>
											출결
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link
									to="/curriculum"
									onClick={() => handleMenuClick("/curriculum")}
								>
									<S.MenuItem selected={selectedMenu === "/curriculum"}>
										<S.MenuIcon
											as={Flag}
											selected={selectedMenu === "/curriculum"}
										/>
										<S.MenuText active={selectedMenu === "/curriculum"}>
											커리큘럼
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link to="/board" onClick={() => handleMenuClick("/board")}>
									<S.MenuItem selected={selectedMenu === "/board"}>
										<S.MenuIcon
											as={Folder}
											selected={selectedMenu === "/board"}
										/>
										<S.MenuText active={selectedMenu === "/board"}>
											통합게시판
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link
									to="/class-content"
									onClick={() => handleMenuClick("/class-content")}
								>
									<S.MenuItem selected={selectedMenu === "/class-content"}>
										<S.MenuIcon
											as={Code}
											selected={selectedMenu === "/class-content"}
										/>
										<S.MenuText active={selectedMenu === "/class-content"}>
											수업내용
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link
									to="/congratulations"
									onClick={() => handleMenuClick("/congratulations")}
								>
									<S.MenuItem selected={selectedMenu === "/congratulations"}>
										<S.MenuIcon
											as={Gift}
											selected={selectedMenu === "/congratulations"}
										/>
										<S.MenuText active={selectedMenu === "/congratulations"}>
											축하해주세요!
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link
									to="/announcements"
									onClick={() => handleMenuClick("/announcements")}
								>
									<S.MenuItem selected={selectedMenu === "/announcements"}>
										<S.MenuIcon
											as={AlertCircle}
											selected={selectedMenu === "/announcements"}
										/>
										<S.MenuText active={selectedMenu === "/announcements"}>
											공지사항
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link
									to="/complaints"
									onClick={() => handleMenuClick("/complaints")}
								>
									<S.MenuItem selected={selectedMenu === "/complaints"}>
										<S.MenuIcon
											as={MessageCircle}
											selected={selectedMenu === "/complaints"}
										/>
										<S.MenuText active={selectedMenu === "/complaints"}>
											민원게시판
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link
									to="/study-groups"
									onClick={() => handleMenuClick("/study-groups")}
								>
									<S.MenuItem selected={selectedMenu === "/study-groups"}>
										<S.MenuIcon
											as={Bookmark}
											selected={selectedMenu === "/study-groups"}
										/>
										<S.MenuText active={selectedMenu === "/study-groups"}>
											스터디모집
										</S.MenuText>
									</S.MenuItem>
								</Link>
							</li>
							<li>
								<Link to="/faq" onClick={() => handleMenuClick("/faq")}>
									<S.MenuItem selected={selectedMenu === "/faq"}>
										<S.MenuIcon
											as={Info}
											selected={selectedMenu === "/faq"}
										/>
										<S.MenuText active={selectedMenu === "/faq"}>
											FAQ게시판
										</S.MenuText>
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
