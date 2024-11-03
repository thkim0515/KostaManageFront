import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f4f4f4;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;

	@media (max-width: 768px) {
		padding: 10px;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
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
	width: clamp(700px, 90%, 1200px);
	padding: clamp(20px, 5vw, 60px);
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		padding: 20px;
	}
`;

export const TitleWrapper = styled.div`
	color: #4285f4;
	font-family: "DungGeunMo", sans-serif;
	font-size: clamp(20px, 5vw, 30px);
	font-weight: 700;
	text-align: center;
	margin-bottom: 40px;

	@media (max-width: 768px) {
		font-size: 24px;
		margin-bottom: 30px;
	}
`;

export const ManageField = styled.div`
	margin-bottom: 30px;
	text-align: left;
	font-size: clamp(14px, 2vw, 16px);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const ManageDateFieldsContainer = styled.div`
	display: flex;
	gap: clamp(20px, 4vw, 70px);
	width: 100%;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		gap: 10px;
	}
`;

export const ManageDateField = styled.div`
	flex: 1;
	margin: 0 auto 20px auto;
	text-align: left;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const DateLabel = styled.label`
	margin: 10px 0;
	text-align: left;
	width: 100%;
	color: #797979;
	font-size: clamp(14px, 1.5vw, 16px);
`;

export const DateInput = styled.input`
	padding: 8px;
	width: 100%;
	color: #797979;
	margin-top: 5px;
	border-radius: 8px;
	border: 1px solid #dcdcdc;
`;

export const Label = styled.label`
	margin: 10px 0;
	text-align: left;
	width: 100%;
	color: #797979;
	font-size: clamp(14px, 1.5vw, 16px);
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
	background-color: #4285f4;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 20px;
	width: 100%;
	max-width: 200px;
	font-size: clamp(16px, 2vw, 20px);

	&:hover {
		background-color: #0068ff;
	}
`;