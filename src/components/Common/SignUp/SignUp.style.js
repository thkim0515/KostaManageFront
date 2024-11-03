import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: #f4f4f4;
`;

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: clamp(60px, 4vw, 30px) clamp(100px, 10vw, 210px);
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Group = styled.div`
	width: clamp(500px, 70vw, 800px);
	height: clamp(1000px, 50vh, 1800px);
	padding: clamp(60px, 3vw, 40px);
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	color: #4285f4;
	font-family: "DungGeunMo", sans-serif;
	font-size: clamp(40px, 3vw, 40px);
	font-weight: 700;
	text-align: center;
	margin: 0 auto 20px auto;
`;

export const SignUpField = styled.div`
	margin-bottom: clamp(15px, 3vw, 30px);
	text-align: left;
	margin-left: clamp(20px, 5vw, 70px);
	font-size: clamp(14px, 2vw, 16px);
`;

export const Input = styled.input`
	width: 88%;
	justify-content: center;
	padding: clamp(8px, 1.5vw, 10px);
	margin-top: clamp(5px, 1vw, 10px);
	border: 1px solid #c0c0c0;
	border-radius: 5px;
	outline: none;
	box-sizing: border-box;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	color: #797979;
	font-size: clamp(14px, 1.8vw, 18px);
`;

export const ErrorMsg = styled.div`
	color: red;
	font-size: clamp(10px, 1.5vw, 12px);
	margin-top: 5px;
`;

export const Button = styled.button`
	background-color: #4285f4;
	padding: clamp(8px, 2vw, 15px) clamp(15px, 3vw, 20px);
	color: #ffffff;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	font-size: clamp(24px, 2.5vw, 20px);
	width: 40%;
	margin-top: clamp(15px, 2vw, 40px);

	&:hover {
		background-color: #0068ff;
	}
`;

export const RadioGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: clamp(5px, 1vw, 10px);
	margin-bottom: clamp(15px, 3vw, 20px);
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: clamp(15px, 3vw, 20px);
`;

export const CheckboxLabel = styled.label`
	margin-left: 5px;
	font-size: clamp(12px, 1.5vw, 14px);
`;