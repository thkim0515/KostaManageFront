import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardDetail = () => {
    const navigate = useNavigate();
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://192.168.0.2:8080/boards/get/1");
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
                const response = await axios.delete(`http://192.168.0.2:8080/boards/delete/18`, getData,
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
                alert("에러가 발생했습니다");
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
        <div>
            {Array.isArray(getData) && getData.length > 0 ? (
                getData.map((board) => (
                    <div key={board.id}>
                        <h1>{board.title}</h1>
                        <p>{board.content}</p>
                        <button onClick={() => onDeleteClick(board.id)}>삭제</button>
                        <button onClick={() => onUpdateClick(board)}>수정</button>
                    </div>
                ))
            ) : (
                <p>데이터가 없습니다.</p>
            )}
        </div>
    );
};

export default BoardDetail;
