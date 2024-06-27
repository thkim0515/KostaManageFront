import styled from "styled-components";

export const Container = styled.header`
	background-color: #fbfcff;
	display: flex;
	align-items: center;
	justify-content: sp;
	padding: 20px 0;
	width: 100%;
	border-bottom: 1px solid #ececec;
`;

export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
`;

export const Logo = styled.h1`
	color: #4285f4;
	font-family: "Poppins-BlackItalic", Helvetica;
	font-size: 32px;
	font-style: italic;
	font-weight: bold;
	margin: 0;
	cursor: pointer;
	flex-shrink: 0;
`;

export const HeaderMenu = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const Menu = styled.li`
	margin-right: 20px;

	a {
		color: #4285f4;
		font-family: "Noto Sans-Regular", Helvetica;
		font-size: 16px;
		font-weight: 400;
		text-decoration: none;
		padding: 10px 0;
		transition: color 0.3s;

		&:hover {
			color: #2a6bb4;
		}
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledButton = styled.button`
	all: unset;
	background-color: #4285f4;
	border-radius: 22px;
	height: 36px;
	width: 80px;
	text-align: center;
	cursor: pointer;
	color: #fbfcff;
	font-family: "Noto Sans-Regular", Helvetica;
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	margin-left: 10px;

	&:hover {
		background-color: #2a6bb4;
	}
`;

export const Overlap = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const OverlapGroup = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 200px;
	height: 36px;
`;

export const Rectangle = styled.input`
	border: 1.5px solid #919191;
	border-radius: 8px;
	width: 100%;
	height: 100%;
	padding: 0 10px;
`;

export const SearchWrapper = styled.div`
	position: absolute;
	right: 10px;
	display: flex;
	align-items: center;
	height: 100%;
`;

export const SearchIcon = styled.img`
	height: 16px;
	width: 16px;
	justify-content: space-between;
`;
