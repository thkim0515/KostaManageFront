import React from "react";
import * as S from "./AttendanceStats.style";

const AttendanceStats = ({ totalDays, presentDays }) => {
  const percentage =
    totalDays === 0 ? 0 : ((presentDays / totalDays) * 100).toFixed(2);

  return (
    <S.StatsContainer>
      <S.StatItem type="percentage" percentage={percentage}>
        출석률: {percentage}%
      </S.StatItem>
      <S.StatItem>전체일수: {totalDays}일</S.StatItem>
      <S.StatItem>출석일수: {presentDays}일</S.StatItem>
    </S.StatsContainer>
  );
};

export default AttendanceStats;
