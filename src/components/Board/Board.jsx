import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardPage from "../../pages/BoardPage/BoardPage";

const Board = () => {
    const [data , setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                     "http://192.168.0.5:8080/board/get/1"
                );
                console.log(response.status);
                if (response.status === 200) {
                    console.log("회원 정보 전달 한다", response.data);

                    setData(response.data);
                    console.log(setData)
                }
            } catch (error) {
                console.error("에러 발생으로 정보 못 가져옴", error);
            }
        }
        getData();
    }, [])

   
    return (
        <>
        {data.map((board) => {
            <div key={board.userId}>
                {board.cohortId}
                {board.content}
                {board.createdAt}
                {board.likes}
                {board.postDate}
                {board.postId}
                {board.title}
                {board.type}
                {board.updateAt}
                {board.user}
            </div>
        })}
        </>
    );
}

export default Board;