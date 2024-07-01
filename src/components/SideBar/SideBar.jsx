import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Home as HomeIcon,
	Users,
	Book,
	Layers,
	MessageCircle,
	Settings,
	LogOut,
} from "react-feather"; // 아이콘 라이브러리 사용
import * as S from "./SideBar.style.js"; // styled-components 파일 임포트

const SideBar = () => {
	const location = useLocation();

	return (
		<S.SideBarContainer>
			<S.LeftBar>
				<S.Logo>
					<img src="/logo.png" alt="Logo" />
					<S.TextWrapper>KOSTA</S.TextWrapper>
				</S.Logo>
				<nav>
					<ul>
						<li>
							<Link to="/">
								<S.MenuItem selected={location.pathname === "/"}>
									<S.MenuIcon
										as={HomeIcon}
										selected={location.pathname === "/"}
									/>
									<S.MenuText active={location.pathname === "/"}>
										Home
									</S.MenuText>
								</S.MenuItem>
							</Link>
						</li>
						<li>
							<Link to="/student-list">
								<S.MenuItem selected={location.pathname === "/student-list"}>
									<S.MenuIcon
										as={Users}
										selected={location.pathname === "/student-list"}
									/>
									<S.MenuText active={location.pathname === "/student-list"}>
										Student List
									</S.MenuText>
								</S.MenuItem>
							</Link>
						</li>
						<li>
							<Link to="/course">
								<S.MenuItem selected={location.pathname === "/course"}>
									<S.MenuIcon
										as={Book}
										selected={location.pathname === "/course"}
									/>
									<S.MenuText active={location.pathname === "/course"}>
										Course
									</S.MenuText>
								</S.MenuItem>
							</Link>
						</li>
						<li>
							<Link to="/batch">
								<S.MenuItem selected={location.pathname === "/batch"}>
									<S.MenuIcon
										as={Layers}
										selected={location.pathname === "/batch"}
									/>
									<S.MenuText active={location.pathname === "/batch"}>
										Batch
									</S.MenuText>
								</S.MenuItem>
							</Link>
						</li>
						<li>
							<Link to="/chat">
								<S.MenuItem selected={location.pathname === "/chat"}>
									<S.IconWithBadge>
										<S.MenuIcon
											as={MessageCircle}
											selected={location.pathname === "/chat"}
										/>
										<S.Badge>4</S.Badge>
									</S.IconWithBadge>
									<S.MenuText active={location.pathname === "/chat"}>
										Messages
									</S.MenuText>
								</S.MenuItem>
							</Link>
						</li>
						<li>
							<Link to="/settings">
								<S.MenuItem selected={location.pathname === "/settings"}>
									<S.MenuIcon
										as={Settings}
										selected={location.pathname === "/settings"}
									/>
									<S.MenuText active={location.pathname === "/settings"}>
										Settings
									</S.MenuText>
								</S.MenuItem>
							</Link>
						</li>
						<li>
							<Link to="/logout">
								<S.MenuItem selected={location.pathname === "/logout"}>
									<S.MenuIcon
										as={LogOut}
										selected={location.pathname === "/logout"}
									/>
									<S.MenuText active={location.pathname === "/logout"}>
										Sign Out
									</S.MenuText>
								</S.MenuItem>
							</Link>
						</li>
					</ul>
				</nav>
			</S.LeftBar>
		</S.SideBarContainer>
	);
};

export default SideBar;
