import styled from "styled-components";

export const Container = styled.div`
	width: 80%;
	margin: 200px auto;
	padding: 20px;
	display: flex;
	flex-direction: column; /* 세로 정렬 유지 */
	min-height: 100vh;
	align-items: center;
	position: relative;
`;

export const Input = styled.input`
	padding: 5px;
	margin-right: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
	table-layout: fixed;
	flex-grow: 1;
	min-height: 500px; /* 테이블의 최소 높이 설정 */
`;

export const TableRow = styled.tr`
	border-bottom: 1px solid #ddd;
	max-height: 50px;
	행의 최대 높이 설정 &:hover {
		background-color: #f1f1f1;
	}
	cursor: pointer;
`;

export const TableHeader = styled.th`
	padding: 10px;
	text-align: center;
	background-color: #f4f4f4;
	border-bottom: 2px solid #ddd;
	font-weight: bold;
	cursor: default; /* 클릭 이벤트 비활성화 */
`;

export const TableCell = styled.td`
	padding: 10px;
	text-align: center;
	border-bottom: 1px solid #ddd;
	word-wrap: break-word;
	vertical-align: middle;
`;

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px 0;
	border-top: 1px solid #ddd;
	margin-top: auto;
	flex: 1;
`;

export const CreateButton = styled.button`
	width: auto;
	height: 40px;
	padding: 10px 20px;
	margin-left: px;
	font-size: 18px;
	font-family: "DungGeunMo", sans-serif;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;

	&:hover {
		background-color: #0056b3;
	}
`;
export const BottomContainer = styled.div`
	display: flex;
	width: 48%;
	justify-content: space-between;
	align-items: center;
`;