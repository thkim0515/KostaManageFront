import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  position: relative;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
`;

export const Group = styled.div`
  width: clamp(300px, 50vw, 700px);
  height: clamp(300px, 50vw, 700px);
  padding: clamp(20px, 4vw, 40px);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #4285f4;
  font-family: "DungGeunMo", sans-serif;
  font-size: clamp(40px, 3vw, 50px);
  font-weight: 700;
  text-align: center;
  margin: clamp(100px, 15vh, 200px) auto 0 auto;
`;

export const LoginField = styled.div`
  font-size: clamp(14px, 2vw, 16px);
`;

export const Input = styled.input`
  width: 65%;
  color: #797979;
  font-family: "DungGeunMo", sans-serif;
  align-items: center;
  display: center;
  padding: clamp(10px, 2vw, 15px) clamp(15px, 2.5vw, 20px);
  border-radius: 25px;
  background-color: #ffffff;
  margin-bottom: clamp(10px, 3vw, 30px);
  border: 1px solid #c0c0c0;

  &::placeholder {
    color: #797979;
  }
`;

export const Paragraph = styled.p`
  color: #4285f4;
  font-size: clamp(12px, 2vw, 16px);
`;

export const StyledButton = styled(Button)`
  background-color: #4285f4;
  color: #ffffff;
  font-family: "DungGeunMo", sans-serif;
  padding: clamp(8px, 2vw, 10px) clamp(16px, 3vw, 20px);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: clamp(20px, 2.5vw, 24px);
  width: 40%;
  margin-top: clamp(25px, 3vw, 70px);

  &:hover {
    background-color: #0068ff;
  }
`;