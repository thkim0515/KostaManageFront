import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeBoard from "./NoticeBoard";

const Board = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/boards");
                console.log("Response data:", response.data);
                if (response.status === 200) {
                    setData(response.data.data); // response.data가 배열이라고 가정
                }
            } catch (error) {
                console.error("에러 발생으로 정보 못 가져옴", error);
            }
        };
        getData();
    }, []);

    return (
        <>
            {data.length === 0 ? (
                <div>Loading...</div>
            ) : (
                data.map((board) => (
                    <NoticeBoard key={board.userId} board={board} />
                ))
            )}
        </>
    );
};

export default Board;
