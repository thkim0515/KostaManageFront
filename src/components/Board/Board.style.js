import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f7f7f7;
`;

export const Wrap = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 3fr 1fr auto;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
  font-weight: bold;
  text-align: left;
  align-items: center;
`;

export const List = styled.div`
  text-align: center;
  padding: 5px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 5px 10px;
  margin-left: auto;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  cursor: pointer;
`;

export const Table = styled.div`
  margin-top: 20px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 3fr 1fr;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
