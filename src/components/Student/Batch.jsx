import React from "react";
import styled from "styled-components";

const StudentBatch = styled.div`
	margin-bottom: 10px;
`;
const Batch = ({ batch }) => <StudentBatch>기수: {batch}</StudentBatch>;

export default Batch;
