import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #f8f9fa;
	width: 100%; // 최상위 컨테이너는 전체 너비 사용
`;

export const HeaderWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	width: 100%; // 헤더는 전체 너비 사용
`;

export const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 43%;
`;

export const Search = styled.input`
	flex: 1;
	padding: 8px;
	font-size: 16px;
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 100%; // 검색 입력 필드 너비는 전체 부모 너비 사용
`;

export const ContactDetailsHeader = styled.div`
	display: flex;
	align-items: center;
	margin-left: 16px;
`;

export const ContactDetailsText = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-right: 16px;
`;

export const IconWrapper = styled.div`
	display: flex;
	gap: 16px;
	font-size: 18px;
`;

export const MainContent = styled.div`
	display: flex;
	flex: 1;
	overflow: hidden;
	width: 100%; // 메인 컨테이너는 전체 너비 사용
`;

export const StudentList = styled.div`
	width: 340px; // 학생 목록의 가로 넓이를 고정
	overflow-y: auto;
	background-color: #fff;
	border-right: 1px solid #ddd;
`;

export const StudentItem = styled.div`
	display: flex;
	padding: 16px;
	border-bottom: 1px solid #ddd;
	cursor: pointer;

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const StudentAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

export const StudentInfo = styled.div`
	margin-left: 16px;
`;

export const StudentName = styled.div`
	font-size: 16px;
	font-weight: bold;
`;

export const StudentEmail = styled.div`
	color: gray;
`;

export const DetailPanel = styled.div`
	flex: 1; // 남는 공간을 모두 차지
	padding: 32px;
	overflow-y: auto;
	background-color: #fff;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const DetailsAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsBody = styled.div`
  margin-bottom: 16px;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  div {
    flex: 1;
    &:first-child {
      margin-right: 16px;
    }
  }
`;

export const DetailsButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  
  &:hover {
    background-color: #0056b3;
  }

  svg {
    margin-right: 8px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  
  &:hover {
    background-color: #c82333;
  }

  svg {
    margin-right: 8px;
  }
`;
