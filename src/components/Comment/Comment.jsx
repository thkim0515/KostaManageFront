import React, { useEffect } from "react";
import axios from "axios";

export const Comment = () => {

    useEffect(() => {
        const getData = async () => {
            try {
                const respone = await axios.get(
                    "#"
                );
                console.log(respone.status);
                if (respone.status === 200) {
                    console.log("회원 정보 전달 한다", respone.data);
               
                }
            } catch (error) {
                console.error("에러 발생으로 정보 못 가져옴", error);
            }
        }
        getData();
    }, [])
    
    return (
        <>
            {getDate.map((comment) => {
                <div key={comment.comment_id}>
                    {comment.board_id}
                    {comment.user_id}
                    {comment.content}
                    {comment.parent_id}
                    {comment.created_at}
                    {comment.}
                </div>
    
            })}
        </>
    );
}

export default Comment;