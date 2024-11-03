import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 1200px;
	background-color: #f4f4f4;
	box-sizing: border-box;

	@media (max-width: 768px) {
		padding: 15px;
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

export const TitleWrapper = styled.div`
	color: #4285f4;
	font-family: "DungGeunMo", sans-serif;
	font-size: clamp(24px, 5vw, 30px);
	font-weight: 700;
	text-align: center;
	margin: 0 0 60px 0;

	@media (max-width: 768px) {
		font-size: 20px;
		margin-bottom: 40px;
	}
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: clamp(700px, 80%, 1200px);
	padding: clamp(20px, 5vw, 60px) clamp(20px, 5vw, 90px);
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		width: 100%;
		padding: 20px;
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const SecRow = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
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

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Label = styled.label`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 5px;
	color: #6c757d;
	font-size: clamp(14px, 2vw, 18px);
	font-weight: 400;
	margin-left: -70px;

	@media (max-width: 768px) {
		margin-left: 0;
		justify-content: center;
	}
`;

export const DateLabel = styled.label`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 5px;
	color: #6c757d;
	font-size: clamp(14px, 2vw, 18px); /* 반응형 폰트 크기 */
	font-weight: 400;
	margin-left: -40px; /* Label과 다른 위치 */

	@media (max-width: 768px) {
		margin-left: 0;
		justify-content: center;
	}
`;

export const GeneLabel = styled.label`
	display: flex;
	align-items: center;
	margin-bottom: 5px;
	color: #6c757d;
	font-size: clamp(14px, 2vw, 18px);
	font-weight: 400;
	margin-left: -480px;

	@media (max-width: 768px) {
		margin-left: 0;
		justify-content: center;
	}
`;

export const GeneSelect = styled.select`
	height: 45px;
	width: 40%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 6px;
	outline: none;
	background-color: white;
	color: #6c757d;
	font-size: 16px;

	&:hover {
		border: 1px solid #0056d2;
	}

	@media (max-width: 768px) {
		width: 80%;
	}
`;

export const Select = styled.select`
	height: 45px;
	width: 80%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 6px;
	outline: none;
	background-color: white;
	color: #6c757d;
	font-size: 16px;

	&:hover {
		border: 1px solid #0068ff;
	}

	@media (max-width: 768px) {
		width: 80%;
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
	background-color: #4285f4;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: clamp(16px, 2vw, 20px);
	color: white;
	width: 50%;
	margin-top: 40px;
	text-align: center;

	&:hover {
		background-color: #0068ff;
	}

	@media (max-width: 768px) {
		width: 80%;
		font-size: 18px;
	}
`;