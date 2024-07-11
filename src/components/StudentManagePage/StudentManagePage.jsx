import React, { useState, useEffect } from 'react';
import * as S from './StrudentManagePage.style';
import axios from 'axios';

const StudentManagePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    axios.get('http://192.168.19.66:8080/cohorts/all') // 백엔드 API 엔드포인트
      .then(response => {
        console.log(response.data); // 데이터 확인을 위한 로그 출력
        setData(response.data);
        setLoading(false); // 데이터 로딩 완료
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // 오류 발생 시 로딩 상태 해제
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // 로딩 중일 때 표시
  }

  return (
    <S.Container>
      {data ? (
        <>
          <S.Row>
            <S.Box>{data.branchName}</S.Box>
            <S.Box>{data.branchLocation}</S.Box>
            <S.Box>{data.cohortNumber}</S.Box>
          </S.Row>
          <S.FullWidthBox>{data.generation}</S.FullWidthBox>
          <S.DateBox>시작 날짜: {data.startDate}</S.DateBox>
          <S.DateBox>종료 날짜: {data.endDate}</S.DateBox>
          <S.Button>기수 등록</S.Button>
        </>
      ) : (
        <p>No data available</p> // 데이터가 없을 때 표시
      )}
    </S.Container>
  );
};

export default StudentManagePage;
