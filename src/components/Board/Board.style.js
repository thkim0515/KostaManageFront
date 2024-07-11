import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #f1f1f1;
  }
  cursor: pointer;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f9f9f9;
  border-bottom: 2px solid #ccc;
  cursor: default; /* 클릭 이벤트 비활성화 */
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;
