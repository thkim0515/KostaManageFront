import React from "react";
import styled from "styled-components";

const StudentName = styled.div`
	font-weight: bold;
`;
const Name = ({ name }) => <StudentName>{name}</StudentName>;

export default Name;
