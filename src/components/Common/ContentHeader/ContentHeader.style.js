import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 5vh;
	font-size: 3rem;
	position: relative;
`;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative; /* 추가: 포지션 상대 */
`;

export const Image = styled.div`
	margin-top: 135px;
	width: 100%;
	height: 200px;
	position: relative;
	img {
		width: 100%;
		height: 200px;
	}
`;

export const TextOverlay = styled.div`
	position: absolute;
	top: 21%;
	left: 3%;
	z-index: 1; /* 이미지 위로 쌓이도록 설정 */
	color: white; /* 텍스트 색상 */
	font-weight: bold; /* 글자 굵기 */
	font-size: 40px; /* 글자 크기 */
	font-family: "DungGeunMo", sans-serif;
`;


