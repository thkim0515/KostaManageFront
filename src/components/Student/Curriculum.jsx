import React from "react";
import styled from 'styled-components';

const Course = styled.div`
  margin-bottom: 10px;
`;

const Curriculum = ({ course }) => (
    <Course>교육과정: {course}</Course>
  );
  

export default Curriculum;
