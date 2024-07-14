import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
	background-color: #f4f4f4;
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; /* 수직 가운데 정렬을 위해 추가 */
	width: 750px;
	padding: 60px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	/*margin: 50px 0 0 150px;*/
`;

export const TitleWrapper = styled.div`
	color: #0068ff;
	font-family: "Noto Sans CJK KR-Bold", Helvetica;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	margin: 0 0 70px 0;
`;
export const ManageField = styled.div`
	margin-bottom: 30px;
	text-align: left;
	margin: 0 0 20px 0px;
	font-size: 16px;
	display: flex;
	flex-direction: column; /* 세로 방향으로 정렬 추가 */
	align-items: center;
	width: 100%;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	color: #797979;
	font-size: 18px;
`;
export const Input = styled.input`
	width: 100%;
	/*justify-content: center;*/
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
	background-color: #0068ff;
	color: #ffffff;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 20px;
	width: 60%;
	margin-top: 20px;

	&:hover {
		background-color: #ffffff;
		color: black;
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
