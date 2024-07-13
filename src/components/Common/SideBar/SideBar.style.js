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

export const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: -20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    right: -15px;
  }
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
  font-size: 25px;
  font-weight: bold;
  font-family: "Noto Sans-Regular", Helvetica;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  visibility: ${(props) => (props.isFullyOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isFullyOpen ? 1 : 0)};
  transition: visibility 0s ${(props) => (props.isFullyOpen ? "0s" : "0.3s")},
    opacity 0.3s;
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
