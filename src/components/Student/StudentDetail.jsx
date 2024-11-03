import React from "react";
import styled from "styled-components";
import StudentImage from "./StudentImage";
import StudentName from "./StudentName";
import StudentBatch from "./StudentBatch";
import StudentCourse from "./StudentCourse";
import StudentDate from "./StudentDate";

const DetailsContainer = styled.div`
	flex: 1;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StudentDetails = ({ student }) => {
	const { imgSrc, name, batch, course, date } = student;

	const components = [
		<StudentImage key="image" src={imgSrc} />,
		<StudentName key="name" name={name} />,
		<StudentBatch key="batch" batch={batch} />,
		<StudentCourse key="course" course={course} />,
		<StudentDate key="date" date={date} />,
	];

	return (
		<DetailsContainer>
			{components.map((component) => component)}
		</DetailsContainer>
	);
};

export default StudentDetails;
