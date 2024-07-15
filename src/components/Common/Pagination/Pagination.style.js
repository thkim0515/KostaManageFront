import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 2px;
  font-size: 14px;
  border: 1px solid #007bff;
  background-color: white;
  color: #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #e9ecef;
    color: #adb5bd;
    border-color: #adb5bd;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: #007bff;
    color: white;
  }
`;
