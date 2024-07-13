import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BoardItem = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MetaData = styled.div`
  margin-bottom: 10px;
  color: #888;
`;

export const Date = styled.div`
  font-size: 14px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #333; /* 두께를 2px로, 색상을 더 진하게 설정 */
  margin: 20px 0;
`;

export const Content = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.5;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NoData = styled.div`
  text-align: center;
  color: #888;
  font-size: 18px;
`;
