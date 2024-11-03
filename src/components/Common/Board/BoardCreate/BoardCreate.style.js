import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 80%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 입체감 추가 */
`;

export const EditorWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  .ql-editor {
    min-height: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 입체감 추가 */
  }
  .ql-container {
    height: 500px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 입체감 추가 */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 버튼을 양 끝으로 배치 */
  width: 100%;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #5a6268;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #4285f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #007bff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
