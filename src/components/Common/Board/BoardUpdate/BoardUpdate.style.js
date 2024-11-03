import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 중앙 정렬
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 800px;
  margin: 20px auto; // 가로 중앙 정렬
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
  padding: 20px 200px; // 버튼 크기를 넓게 설정
  font-size: 16px;
  color: #fff;
  background-color: #4285f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block; // 중앙 정렬을 위해 블록 요소로 변경
  margin: 20px auto; // 중앙 정렬을 위해 상하 여백 20px, 좌우 자동
  &:hover {
    background-color: #007bff;
  }
`;

export const EditorWrapper = styled.div`
  width: 100%; // 에디터의 너비를 100%로 설정
  .ql-editor {
    min-height: 300px; // 에디터의 최소 높이를 설정
  }
  .ql-container {
    height: 400px; // 에디터의 높이를 설정
  }
`;
