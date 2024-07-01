import styled from 'styled-components';

export const SideBarContainer = styled.div`
	background-color: #ffffff;
	height: 100vh;
	width: 270px;
`;

export const LeftBar = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	padding: 51px 0 0 80px;
`;

export const TextWrapper = styled.div`
	color: #5285f2;
	font-family: "Ubuntu-Bold", Helvetica;
	font-size: 22.7px;
	font-weight: 700;
	line-height: normal;
	margin-left: 5px;
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	height: 61px;
	width: 100%;
	padding-left: 36px;
	background-color: ${({ selected }) => (selected ? "#eff6ff" : "#fff")};
	cursor: pointer;

	&:hover {
		background-color: #eff6ff;
	}
`;

export const Rectangle = styled.div`
	background-color: #0077ff;
	height: 61px;
	left: 0;
	position: absolute;
	top: 0;
	width: 6px;
`;

export const MenuIcon = styled.div`
	height: 27px;
	width: 27px;
	margin-right: 20px;
	color: ${({ selected }) => (selected ? "#0077ff" : "#8a8a8a")};

	&:hover {
		color: #0077ff;
	}
`;

export const MenuText = styled.div`
	color: ${({ active }) => (active ? "#0077ff" : "#8a8a8a")};
	font-family: "Open Sans-Bold", Helvetica;
	font-size: 20px;
	font-weight: 700;
	line-height: normal;

	${MenuItem}:hover & {
		color: #0077ff;
	}
`;

export const IconWithBadge = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

export const Badge = styled.div`
	background-color: #0077ff;
	border-radius: 11px;
	color: #ffffff;
	font-family: "Open Sans-Bold", Helvetica;
	font-size: 15.6px;
	font-weight: 700;
	height: 22px;
	width: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: -10px;
	top: -10px;
`;

export const MainContent = styled.div`
	margin-left: 270px;
	padding: 20px;
`;
