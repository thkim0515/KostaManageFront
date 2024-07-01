import styled from "styled-components";

export const SideBarContainer = styled.div`
	height: 100vh; // viewport height 사용
	width: 270px;
	display: flex;
	flex-direction: column;
  
`;

export const Rectangle = styled.div`
	background-color: #fbfcff;
	border-radius: 0px 30px 30px 0px;
	width: 270px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const LeftBar = styled.div`
	background-color: #fbfcff;
	width: 270px;
	height: 100%;
	display: flex;
	flex-direction: column;
  border-right: 2px solid #ececec;
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	height: 60px;
	padding-left: 20px;
	cursor: pointer;
	background-color: ${(props) => (props.selected ? "#e9ecef" : "transparent")};

	&:hover {
		background-color: #e9ecef;
	}
`;

export const MenuIcon = styled.div`
	color: ${(props) => (props.selected ? "#007bff" : "#6c757d")};
	margin-right: 10px;
`;

export const MenuText = styled.div`
	color: ${(props) => (props.active ? "#007bff" : "#6c757d")};
	font-size: 18px;
	font-weight: bold;
`;

export const Badge = styled.div`
	background-color: #e74c3c;
	color: #ecf0f1;
	border-radius: 50%;
	padding: 5px;
	font-size: 12px;
`;

export const commonMenuStyles = (top) => `
  margin-top: ${top}px; 
`;
