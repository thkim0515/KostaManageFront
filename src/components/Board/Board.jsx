import React, { useEffect, useState } from "react";
import axios from "axios";

const Board = () => {
    const [data , setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/boards"
                );
                console.log(response.status);
                if (response.status === 200) {
                    console.log("회원 정보 전달 한다", response.data);
                    setData(response.data);
                }
            } catch (error) {
                console.error("에러 발생으로 정보 못 가져옴", error);
            }
        }
        getData();
    }, [])
    
    return (
        <>
        {data.map((Board) => {
            <div key={Board.post_id}>
                {Board.title}  
                {Board.content}  
                {Board.post_date}  
                {Board.type}  
                {Board.user_id}  
                {Board.cohort_id}  
            </div>
        })}
        </>
    );
}

export default Board;