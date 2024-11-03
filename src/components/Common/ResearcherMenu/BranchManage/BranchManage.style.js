import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f4f4f4;
	box-sizing: border-box;

	@media (max-width: 768px) {
		padding: 10px;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto 30px auto;
	background-color: #ffffff;
	padding: 20px;

	@media (max-width: 768px) {
		padding: 15px;
	}
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: clamp(700px, 80%, 1200px);
	padding: clamp(20px, 5vw, 60px);
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	background-color: #fff;

	@media (max-width: 768px) {
		width: 100%;
		padding: 20px;
	}
`;

export const TitleWrapper = styled.div`
	color: #4285f4;
	font-family: "DungGeunMo", sans-serif;
	font-size: clamp(20px, 5vw, 30px);
	font-weight: 700;
	text-align: center;
	margin: 0 0 50px 0;
`;

export const ManageField = styled.div`
	width: 100%;
	margin-bottom: 30px;
	text-align: left;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 10px;

	@media (max-width: 768px) {
		align-items: center;
	}
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	color: #797979;
	font-size: clamp(14px, 1.5vw, 18px);
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin: 5px 0;
	border: 1px solid #dcdcdc;
	border-radius: 5px;
	outline: none;
	box-sizing: border-box;
`;

export const ErrorMsg = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 5px;
`;

export const Button = styled.button`
	background-color: #4285f4;
	color: #ffffff;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 20px;
	width: clamp(150px, 60%, 300px);
	margin-top: 20px;
	text-align: center;

	&:hover {
		background-color: #0068ff;
	}

	@media (max-width: 768px) {
		width: 100%;
		font-size: 18px;
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
	font-size: clamp(12px, 1.5vw, 14px);
`;