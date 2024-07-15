import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	box-sizing: border-box;
`;

export const Wrapper = styled.div`
	background: #fff;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	display: flex;
`;

export const LeftColumn = styled.div`
	flex: 1;
	margin-right: 20px;
`;

export const RightColumn = styled.div`
	flex: 3;
`;

export const Image = styled.img`
	width: 300px;
	height: auto;
	margin-bottom: 10px;
`;

export const TitleWrapper = styled.div`
	margin-bottom: 20px;

	h1 {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 10px;
		color: #555555;
	}

	p {
		font-size: 16px;
		margin-bottom: 5px;
	}
`;

export const AgreeWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;

	input {
		margin-right: 10px;
	}

	p {
		margin: 0;
	}
`;

export const ManageField = styled.div`
	margin-bottom: 20px;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 10px;
	margin-left: -10px;
	font-weight: bold;
	color: #555;
`;
export const SubLabel = styled.label`
	display: block;
	margin-top: 10px;
	margin-bottom: 5px;
	color: #555;
	font-size: 16px;
	font-weight: 500;
`;

export const NameInput = styled.input`
	width: 15%;
	padding: 7px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-bottom: 8px;
`;

export const Input = styled.input`
	width: 80%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-bottom: 10px;
`;
export const PhoneInputWrapper = styled.div`
	display: flex;
	align-items: center;

	span {
		margin: 0 5px;
	}
`;

export const PhoneInput = styled.input`
	width: 60px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	text-align: center;
`;
export const Select = styled.select`
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
`;

export const TextArea = styled.textarea`
	width: 80%;
	height: 250px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	resize: none;
`;

export const TextAreaWrapper = styled.div`
	margin-bottom: 20px;
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label`
	margin-left: 8px;
	color: #444;
`;

export const RadioWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const RadioLabel = styled.label`
	margin-left: 8px;
`;

export const InlineWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
`;

export const InlineInput = styled.input`
	height: 35px;
	padding: 8px;
	margin-left: 4px;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;
	background-color: white;
	color: #6c757d;
	font-size: 16px;

	&:hover {
		border: 1px solid #0056d2;
	}
`;

export const Button = styled.button`
	width: 80%;
	padding: 10px;
	background-color: #007bff;
	color: #ffffff;
	border: 1px solid #ffffff;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: #007bfa;
		border: 1px solid #ffffff;
		color: black;
	}
`;
