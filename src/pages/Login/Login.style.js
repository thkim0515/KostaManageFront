import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
  padding: 20px;
  background: rgba(40, 57, 101, .9);
  border-radius: 10px;
`;

export const Warrap = styled.div`
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  justify-content: center; 
  padding: 20px; 
`;

export const Input = styled.input`
  width: 100%;
  color: #fff;
  display: block;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, .1);
  margin-bottom: 15px;
  &::placeholder {
    color: #ddd;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
`;

export const StyledButton = styled(Button)`
  background: #1161ee;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  width: 100%;
  margin-top: 15px;
  &:hover {
    background: #0e4eaa;
  }
`;

export const Tab = styled.div`
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  ${({ selected }) => selected && `
    color: #fff;
    border-color: #1161ee;
  `}
`;

export const HorizontalRule = styled.hr`
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, .2);
`;

export const Link = styled.div`
  text-align: center;
`;
