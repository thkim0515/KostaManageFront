import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
`;

const StatItem = styled.p`
  font-size: 20px;
  margin: 0 10px;
  font-weight: bold;
  color: ${(props) => {
    if (props.type === "percentage") {
      if (props.percentage === 0) return "black";
      return props.percentage >= 80 ? "blue" : "red";
    }
    return "#555";
  }};
`;

const AttendanceStats = ({ totalDays, presentDays }) => {
  const percentage =
    totalDays === 0 ? 0 : ((presentDays / totalDays) * 100).toFixed(2);

  return (
    <StatsContainer>
      <StatItem type="percentage" percentage={percentage}>
        출석률: {percentage}%
      </StatItem>
      <StatItem>전체일수: {totalDays}일</StatItem>
      <StatItem>출석일수: {presentDays}일</StatItem>
    </StatsContainer>
  );
};

export default AttendanceStats;
