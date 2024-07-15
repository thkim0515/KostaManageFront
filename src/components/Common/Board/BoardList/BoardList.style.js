import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const CreateButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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
  max-height: 50px; /* 행의 최대 높이 설정 */
  &:hover {
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
  margin-top: auto; /* 컨테이너 하단에 고정 */
`;
