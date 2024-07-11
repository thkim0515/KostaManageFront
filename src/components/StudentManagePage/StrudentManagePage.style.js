import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px;
	border: 1px solid #797979;
	width: 700px;
	height: 700px;
	margin: 40px auto;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 25px;
`;

export const Box = styled.div`
	border: 1px solid #797979;
	padding: 10px;
	width: 30%;
	text-align: center;
	height: 100px; /* 새로운 높이 값 추가 */
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FullWidthBox = styled.div`
	border: 1px solid #797979;
	padding: 10px;
	width: 100%;
	text-align: center;
	margin-bottom: 25px; /* 간격 조정 */
	height: 120px; /* 새로운 높이 값 추가 */
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DateBox = styled.div`
	border: 1px solid #797979;
	padding: 10px;
	width: 100%;
	text-align: left; /* 글씨를 왼쪽으로 배치 */
	font-family: "Noto Sans CJK KR-Bold", Helvetica;
	color: #797979;
	margin-bottom: 20px; /* 간격 조정 */
	height: 50px; /* 새로운 높이 값 추가 */
	display: flex;
	align-items: center;
`;

export const Button = styled.button`
	padding: 10px 20px;
	border: 1px solid #dcdcdc;
	border-radius: 8px;
	background-color: #0068ff;
	color: #ffffff;
	cursor: pointer;
	margin-top: 20px;
	font-family: "Noto Sans CJK KR-Bold", Helvetica;
	font-weight: 700;
	&:hover {
		color: black;
	}
`;
