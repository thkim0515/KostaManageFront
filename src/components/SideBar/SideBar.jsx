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

	const handleMenuClick = (path) => {
		setSelectedMenu(path);
	};

	const menuItems = [
		{ path: "/attendance", icon: Bluetooth, label: "출결" },
		{ path: "/curriculum", icon: Flag, label: "커리큘럼" },
		{ path: "/board", icon: Folder, label: "통합게시판" },
		{ path: "/class-content", icon: Code, label: "수업내용" },
		{ path: "/congratulations", icon: Gift, label: "축하해주세요!" },
		{ path: "/announcements", icon: AlertCircle, label: "공지사항" },
		{ path: "/complaints", icon: MessageCircle, label: "민원게시판" },
		{ path: "/study-groups", icon: Bookmark, label: "스터디모집" },
		{ path: "/faq", icon: Info, label: "FAQ게시판" },
	];

	return (
		<S.SideBarContainer>
			<S.Rectangle>
				<S.LeftBar>
					<nav>
						<ul style={{ listStyleType: "none", padding: 0 }}>
							{menuItems.map((item) => (
								<li key={item.path}>
									<Link
										to={item.path}
										onClick={() => handleMenuClick(item.path)}
									>
										<S.MenuItem selected={selectedMenu === item.path}>
											<S.MenuIcon
												as={item.icon}
												selected={selectedMenu === item.path}
											/>
											<S.MenuText active={selectedMenu === item.path}>
												{item.label}
											</S.MenuText>
										</S.MenuItem>
									</Link>
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
