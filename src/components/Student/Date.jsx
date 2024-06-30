import React from "react";
import styled from "styled-components";

const DateContainer = styled.div`
	margin-bottom: 10px;
`;

const Date = ({ date }) => <DateContainer>날짜: {date}</DateContainer>;

export default Date;
