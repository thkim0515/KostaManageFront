import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BoardDetail = () => {
    const [boardData, setBoardData] = useState([]);

    useEffect(() => {

        const getDetailData = async () => {
            try {
                const response = await axios.get(
                    "#"
                );
                console.log(response.status);
                if (response.status === 200) {
                    console.log("complete", response.data);
                    setBoardData(response.data);
                }
            } catch (error) {
                console.log("error", error);
            }
        }
        getDetailData();
    },[]);


    return (
        <S.Container>
            {boardData.map((board) => {
                <S.Table key={board.id}>
                    <S.TableHead>
                        {board.title}
                    </S.TableHead>
                    {board.file && <img src={board.file} alt="Board" />}
                    {board.content}
                </S.Table>

            })}
        </S.Container>
    );
};

export default BoardDetail;