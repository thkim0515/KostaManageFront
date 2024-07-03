import styled from "styled-components";

export const Container = styled.div`
	width: 240px;
	padding: 20px;
	background-color: #fff;
	border-right: 1px solid #e0e0e0;
`;

export const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #4a90e2;
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	margin-bottom: 20px;

	&:hover {
		background-color: #357ab8;
	}
`;

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 0;
	cursor: pointer;
	color: #333;
	font-size: 22px;

	&:hover {
		color: #4a90e2;
	}

	svg {
		margin-right: 10px;
	}
`;

export const CategoryTitle = styled.h3`
	margin-top: 20px;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: bold;
	color: #666;
`;

export const CategoryItem = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 0;
	cursor: pointer;
	color: #333;
	font-size: 18px;

	&:hover {
		color: #4a90e2;
	}

	svg {
		margin-right: 10px;
	}
`;
