import React from "react";
import styled from "styled-components";
import StudentImage from "./StudentImage";
import StudentName from "./StudentName";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const StudentList = ({ students, onSelect }) => (
  <ListContainer>
    {students.map((student) => (
      <ListItem key={student.id} onClick={() => onSelect(student)}>
        <StudentImage src={student.imgSrc} />
        <StudentName name={student.name} />
      </ListItem>
    ))}
  </ListContainer>
);

export default StudentList;
