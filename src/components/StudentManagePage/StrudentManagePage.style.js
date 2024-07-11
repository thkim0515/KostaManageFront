import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	background-color: #f4f4f4;
`;

export const Wrapper = styled.div`
	width: 100%;
	/*max-width: 800px;*/
	margin: 0 auto;
	padding: 50px;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TitleWrapper = styled.div`
	color: #0068ff;
	font-family: "Noto Sans CJK KR-Bold", Helvetica;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	margin: 0 0 60px 0;
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; /* 수직 가운데 정렬을 위해 추가 */
	width: 750px;
	padding: 90px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin: 50px 0 0 400px;
`;
export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	width: 135%;
	margin-bottom: 20px;
`;

export const SecRow = styled.div`
	display: flex;
	justify-content: center;
	width: 230%;
	margin-bottom: 20px;
`;

export const GenerationField = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	width: 100%;
`;

export const FullWidthBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	width: 100%;
`;

export const DateBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	width: 100%;
`;

export const Input = styled.input`
	width: 80%;
	padding: 10px;
	margin-top: 5px;
	border: 1px solid #6c757d;
	border-radius: 5px;
	outline: none;
	box-sizing: border-box;
`;

export const Label = styled.label`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 5px;
	color: #6c757d;
	font-size: 18px;
	font-weight: 400px;
`;

export const Select = styled.select`
	height: 45px;
	width: 50%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 6px;
	outline: none;
	background-color: white;
	color: #6c757d;
	font-size: 16px;
	font-weight: 70px;

	&:hover {
		border: 1px solid #0056d2;
	}
`;

export const Option = styled.option`
	color: white;
	background-color: #6c757d;
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
	color: white;
	width: 50%;
	margin-top: 40px;

	&:hover {
		background-color: #0056d2;
	}
`;
