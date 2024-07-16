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
	width: 700px;
	height: 500px;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	color: #0068ff;
	font-family: "DungGeunMo", sans-serif;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	margin: 200px 0 0 330px;
`;

export const LoginField = styled.div`
	font-size: 16px;
`;

export const Input = styled.input`
	width: 80%;
	color: #797979;
	font-family: "DungGeunMo", sans-serif;
	align-items: center;
	display: center;
	padding: 15px 20px;
	border-radius: 25px;
	background-color: #ffffff;
	margin-bottom: 30px;
	&::placeholder {
		color: #797979;
	}
`;

export const Paragraph = styled.p`
	color: #0068ff;
`;

export const StyledButton = styled(Button)`
	background-color: #0068ff;
	color: #ffffff;
	font-family: "DungGeunMo", sans-serif;
	padding: 10px 20px;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	font-size: 20px;
	width: 80%;
	margin-top: 20px;

	&:hover {
		background-color: #0056d2;
	}
`;
