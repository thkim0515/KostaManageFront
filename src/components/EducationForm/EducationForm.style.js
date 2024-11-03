import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	box-sizing: border-box;

	@media (max-width: 768px) {
		padding: 10px;
	}
`;

export const Wrapper = styled.div`
	background: #fff;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 15px;
	}
`;

export const LeftColumn = styled.div`
	flex: 1;
	margin-right: 20px;

	@media (max-width: 768px) {
		margin-right: 0;
		margin-bottom: 15px;
	}
`;

export const RightColumn = styled.div`
	flex: 3;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 300px;
	height: auto;
	margin-bottom: 10px;

	@media (max-width: 768px) {
		max-width: 100%;
		margin-bottom: 20px;
	}
`;

export const TitleWrapper = styled.div`
	margin-bottom: 20px;

	h1 {
		font-size: clamp(20px, 2.5vw, 24px);
		font-weight: bold;
		margin-bottom: 10px;
		color: #555555;
	}

	p {
		font-size: clamp(14px, 2vw, 16px);
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
		font-size: clamp(12px, 1.8vw, 14px);
	}
`;

export const ManageField = styled.div`
	margin-bottom: 20px;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 10px;
	font-weight: bold;
	color: #555;
	font-size: clamp(14px, 1.8vw, 16px);
`;

export const SubLabel = styled.label`
	display: block;
	margin-top: 10px;
	margin-bottom: 5px;
	color: #555;
	font-size: clamp(14px, 1.8vw, 16px);
	font-weight: 500;
`;

export const NameInput = styled.input`
	width: clamp(150px, 15%, 200px);
	padding: 7px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-bottom: 8px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Input = styled.input`
	width: 100%;
	max-width: 80%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-bottom: 10px;

	@media (max-width: 768px) {
		width: 100%;
		max-width: 100%;
	}
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
	width: 100%;
	max-width: 80%;
	height: 250px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	resize: none;

	@media (max-width: 768px) {
		max-width: 100%;
	}
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
		border: 1px solid #007bff;
	}
`;

export const Button = styled.button`
	width: 80%;
	padding: 10px;
	background-color: #4285f4;
	color: #ffffff;
	border: 1px solid #ffffff;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: #007bff;
		border: 1px solid #ffffff;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;