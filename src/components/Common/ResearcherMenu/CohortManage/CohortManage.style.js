import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f4f4f4;
`;

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 0 30px 0;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 750px;
	padding: 60px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TitleWrapper = styled.div`
	color: #0068ff;
	font-family: "DungGeunMo", sans-serif;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 70px;
`;

export const ManageField = styled.div`
	margin-bottom: 30px;
	text-align: left;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
export const ManageDateFieldsContainer = styled.div`
	display: flex;
	gap: 70px;
`;

export const ManageDateField = styled.div`
	flex: 1;
	margin: 0 120px 20px -10px;
	text-align: left;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	/*align-items: center;*/
	width: 100%;
`;
export const DateLabel = styled.label`
	margin: 10px 28px 0 -12px;
	text-align: left;
	width: 100%;
	color: #797979;
`;

export const DateInput = styled.input`
	padding: 8px;
	width: 150%;
	color: #797979;
	margin-top: 5px;
	border-radius: 8px;
	border: 1px solid #dcdcdc;
`;

export const Label = styled.label`
	margin: 10px 28px 0 0;
	text-align: left;
	width: 100%;
	color: #797979;
`;

export const Input = styled.input`
	padding: 10px;
	width: 100%;
	margin-top: 5px;
	border-radius: 8px;
	border: 1px solid #dcdcdc;
`;

export const Select = styled.select`
	padding: 10px;
	width: 100%;
	margin-top: 5px;
	color: #666;
	border: 1px solid #dcdcdc;
	border-radius: 8px;
`;

export const TextArea = styled.textarea`
	padding: 10px;
	width: 100%;
	margin-top: 5px;
	border-radius: 8px;
	border: 1px solid #dcdcdc;
`;

export const ErrorMsg = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 5px;
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: #0068ff;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 20px;
	width: 100%;
	max-width: 200px;

	&:hover {
		background-color: #005aad;
	}
`;
