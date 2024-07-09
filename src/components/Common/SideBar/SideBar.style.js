import styled from "styled-components";

export const SideBarContainer = styled.div`
	height: 100vh; // viewport height 사용
	width: 245px;
	display: flex;
	flex-direction: column;
  
`;

export const Rectangle = styled.div`
	background-color: #fbfcff;
	border-radius: 0px 30px 30px 0px;
	width: 245px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const LeftBar = styled.div`
	width: 245px;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-right: 2px solid #ececec;
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	height: 85px;
	padding-left: 30px;
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
	font-size: 25px;
	font-weight: bold;
	font-family: "Noto Sans-Regular", Helvetica;;
`;

export const SubMenuItem = styled.div`
  background-color: #f1f1f1;
  padding-left: 40px;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const commonMenuStyles = (top) => `
  margin-top: ${top}px; 
`;
