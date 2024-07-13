import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './BoardDetail.style';

const BoardDetail = () => {
    const navigate = useNavigate();
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://192.168.0.31:8080/boards/get/2");
                console.log(response.data);
                const data = Array.isArray(response.data) ? response.data : [response.data];
                setGetData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const onDeleteClick = async (id) => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            try {
                const response = await axios.put(`http://192.168.0.31:8080/boards/soft-delete/1`, getData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.status === 200) {
                    console.log("success delete", response.status);
                    alert("삭제 완료 했습니다");
                    setGetData(getData.filter(board => board.id !== id));
                } else {
                    alert("삭제 실패");
                }
            } catch (error) {
                console.log("fail", error);
                alert("에러가 발생했습니다.");
            }
        } else {
            console.log("cancel");
        }
    };

    const onUpdateClick = (board) => {
        if (window.confirm("정말로 수정하시겠습니까?")) {
            navigate(`/update/${board.id}`);
        } else {
            console.log("cancel");
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
