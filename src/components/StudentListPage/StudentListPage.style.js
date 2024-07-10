import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
	width: 100%;
	padding: 10px;
	margin: 5px 10px 20px 0;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	margin-bottom: 10px;
	cursor: pointer;
	color: #495057;

	&:hover {
		background-color: #e9ecef;
	}
`;

export const MenuText = styled.div`
	color: ${(props) => (props.active ? "#007bff" : "#6c757d")};
	font-size: 25px;
	font-weight: bold;
	alignitems: center;
	margin-left: 20px;
	font-family: "Noto Sans-Regular", Helvetica;
`;

export const SubMenuItem = styled.div`
	background-color: #fbfcff;
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

//export const CategoryTitle = styled.h3`
//	margin-top: 20px;
//	margin-bottom: 10px;
//	margin-left: 15px;
//	font-weight: bold;
//	color: #495057;
//`;
//
//export const CategoryItem = styled.div`
//	display: flex;
//	align-items: center;
//	padding: 10px;
//	margin-bottom: 10px;
//	cursor: pointer;
//	color: #495057;
//	&:hover {
//		background-color: #e9ecef;
//	}
//`;

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3px;
`;

export const HeaderWrap = styled.div`
	padding: 20px;
	border-bottom: 1px solid #dee2e6;
	border-right: 1px solid #dee2e6;
	background-color: #ffffff;
`;

export const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Search = styled.input`
	width: 100%;
	border: 1px solid #dee2e6;
	border-radius: 4px;
`;

export const Content = styled.div`
	display: flex;
	flex: 1;
`;

export const StudentList = styled.div`
  width: 300px;
  border-right: 1px solid #dee2e6;
  overflow-y: auto;
  background-color: #ffffff;
`;

export const StudentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const StudentInfo = styled.div`
  margin-left: 10px;
`;

export const StudentName = styled.div`
  font-weight: bold;
`;

export const StudentEmail = styled.div`
  color: #6c757d;
`;

export const DetailPanel = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  margin-left: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const DetailsAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const DetailsBody = styled.div`
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ContactInfoItem = styled.div`
  margin-bottom: 10px;
`;

export const DetailsButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ContactTitle = styled.h2`
  margin: 0;
`;

export const ContactSubtitle = styled.h4`
  margin: 0;
  color: #6c757d;
`;

export const ContactText = styled.p`
  margin: 0;
  color: #6c757d;
`;

export const ContactLabel = styled.strong`
  display: block;
  margin-bottom: 5px;
`;

export const ContactValue = styled.span`
  display: block;
  margin-bottom: 10px;
`;
