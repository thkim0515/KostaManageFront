import styled from "styled-components";

export const Sidebar = styled.div`
	width: 300px;
	padding: 20px;
	background-color: #f8f9fa;
	border-right: 1px solid #dee2e6;
`;

export const NewContactButton = styled.button`
	width: 100%;
	padding: 10px;
	margin-bottom: 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #0056b3;
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ced4da;
	border-radius: 5px;
`;

export const StudentList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	overflow-y: auto;
`;

export const StudentItem = styled.li`
	display: flex;
	align-items: center;
	padding: 10px;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #e9ecef;
	}
`;

export const StudentAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 10px;
`;

export const StudentInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StudentName = styled.h4`
	margin: 0;
	font-size: 16px;
`;

export const StudentDepartment = styled.p`
	margin: 0;
	color: #6c757d;
`;
