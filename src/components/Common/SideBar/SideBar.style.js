import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100vh;
  width: ${(props) => (props.isOpen ? "215px" : "60px")};
  display: flex;
  flex-direction: column;
  transition: width 0.3s;

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? "215px" : "0")};
  }
`;

export const Rectangle = styled.div`
  background-color: #fbfcff;
  border-radius: 0px 30px 30px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TopToggleButton = styled.button`
	background-color: #444;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 5px;
	cursor: pointer;
	display: none;

	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px 0;
	}

	&:hover {
		background-color: #444;
	}
`;

export const BottomToggleButton = styled.button`
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0;

	@media (max-width: 768px) {
		display: none;
	}

	&:hover {
		background-color: #0056b3;
	}
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const LeftBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ececec;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 85px;
  padding-left: ${(props) => (props.isOpen ? "30px" : "15px")};
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#e9ecef" : "transparent")};

  &:hover {
    background-color: #e9ecef;
  }
`;

export const MenuIcon = styled.div`
  color: ${(props) => (props.selected ? "#007bff" : "#6c757d")};
  margin-right: ${(props) => (props.isOpen ? "10px" : "0")};
`;

export const MenuText = styled.div`
	color: ${(props) => (props.active ? "#007bff" : "#6c757d")};
	font-size: 2rem;
	font-weight: bold;
	font-family: "DungGeunMo", sans-serif;
	display: ${(props) => (props.isOpen ? "block" : "none")};
	visibility: ${(props) => (props.isFullyOpen ? "visible" : "hidden")};
	opacity: ${(props) => (props.isFullyOpen ? 1 : 0)};
	transition: visibility 0s ${(props) => (props.isFullyOpen ? "0s" : "0.3s")},
		opacity 0.3s;

	// @media (max-width: 768px) {
	//   font-size: 1.7rem; /* 모바일 버전에서 텍스트 크기 조정 */
	// }
`;

export const SubMenuItem = styled.div`
  background-color: #f1f1f1;
  padding-left: ${(props) => (props.isOpen ? "40px" : "20px")};
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
