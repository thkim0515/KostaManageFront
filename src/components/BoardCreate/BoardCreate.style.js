import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  height: 800px; /* 높이를 800px로 설정 */
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #000; /* 검은색 테두리 선 */
  border-radius: 8px;
  max-width: 700px; /* 가로 너비를 600px로 설정 */
  margin: 20px auto; /* 가로 중앙 정렬 및 상단 여백 추가 */
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
`;

export const Button = styled.button`
  padding: 20px 50px; /* 버튼 크기를 넓게 설정 */
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block; /* 중앙 정렬을 위해 블록 요소로 변경 */
  margin: 20px auto; /* 중앙 정렬을 위해 상하 여백 20px, 좌우 자동 */
  &:hover {
    background-color: #0056b3;
  }
`;

export const EditorWrapper = styled.div`
  width: 100%; /* 에디터의 너비를 100%로 설정 */
  .ql-editor {
    min-height: 400px; /* 에디터의 최소 높이를 설정 */
  }
  .ql-container {
    height: 500px; /* 에디터의 높이를 설정 */
  }
`;
