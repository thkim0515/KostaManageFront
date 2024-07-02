import styled from "styled-components";

export const Details = styled.div`
	flex: 1;
	padding: 20px;
	background-color: #f8f9fa;
`;

export const ContactDetails = styled.div`
	max-width: 600px;
	margin: auto;
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DetailsAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-bottom: 20px;
`;

export const DetailsButtons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

export const EditButton = styled.button`
	padding: 10px 20px;
	background-color: #28a745;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #218838;
	}
`;

export const DeleteButton = styled.button`
	padding: 10px 20px;
	background-color: #dc3545;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #c82333;
	}
`;
