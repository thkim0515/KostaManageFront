import React from "react";
import styled from "styled-components";

const StudentImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
`;

const Image = ({ src }) => <StudentImage src={src} alt="image" />;

export default Image;
