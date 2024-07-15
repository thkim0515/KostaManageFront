import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./BoardDetail.style";
import { useSelector } from "react-redux";

const BoardDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams(); // URL에서 postId를 가져옴
  const [getData, setGetData] = useState([]);
  const localAddress = useSelector((state) => state.localAddress.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${localAddress}boards/get/${postId}`);
        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setGetData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postId, localAddress]);

  const onDeleteClick = async (id) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        const response = await axios.put(
          `${localAddress}boards/soft-delete/1`,
          getData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          alert("삭제 완료 했습니다");
          setGetData(getData.filter((board) => board.id !== id));
        } else {
          alert("삭제 실패");
        }
      } catch (error) {
        alert("에러가 발생했습니다.");
      }
    } else {
    }
  };

  const onUpdateClick = (board) => {
    if (window.confirm("정말로 수정하시겠습니까?")) {
      navigate(`/update/${board.id}`);
    } else {
    }
  };

  return (
    <S.Container>
      {Array.isArray(getData) && getData.length > 0 ? (
        getData.map((board) => (
          <S.BoardItem key={board.id}>
            <S.Title>{board.title}</S.Title>
            <S.MetaData>
              <S.Date>{new Date(board.createdAt).toLocaleDateString()}</S.Date>
            </S.MetaData>
            <S.Divider />
            <S.Content dangerouslySetInnerHTML={{ __html: board.content }} />
            <S.ButtonContainer>
              <S.Button onClick={() => onDeleteClick(board.id)}>삭제</S.Button>
              <S.Button onClick={() => onUpdateClick(board)}>수정</S.Button>
            </S.ButtonContainer>
          </S.BoardItem>
        ))
      ) : (
        <S.NoData>데이터가 없습니다.</S.NoData>
      )}
    </S.Container>
  );
};

export default BoardDetail;
