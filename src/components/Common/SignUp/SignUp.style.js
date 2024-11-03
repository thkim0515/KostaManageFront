import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100vh;

	background-color: #f4f4f4;
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
	padding: 30px 210px;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Group = styled.div`
	width: 800px;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	color: #0068ff;
	font-family: "DungGeunMo", sans-serif;
	/*font-size: 40px;*/
	font-weight: 700;
	text-align: center;
	margin: 0 0 20px 260px;
`;

export const SignUpField = styled.div`
	margin-bottom: 30px;
	text-align: left;
	margin-left: 70px;
	font-size: 16px;
`;

export const Input = styled.input`
	width: 88%;
	justify-content: center;
	padding: 10px;
	margin-top: 5px 0 0 10px;
	border: 1px solid #dcdcdc;
	border-radius: 5px;
	outline: none;
	box-sizing: border-box;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	color: #797979;
	font-size: 18px;
`;

export const ErrorMsg = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 5px;
`;

export const Button = styled.button`
	background-color: #0068ff;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 20px;
	width: 80%;
	margin-top: 20px;

	&:hover {
		background-color: #0056d2;
	}
`;

export const RadioGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
	margin-left: 5px;
	font-size: 14px;
`;