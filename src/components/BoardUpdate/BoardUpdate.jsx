import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QEditor from "../BoardCreate/QEditor"; // 경로를 올바르게 설정
import * as S from './BoardUpdate.style'; // 스타일 컴포넌트 import

const BoardUpdate = () => {
    const { id } = useParams();
    const [formdata, setFormdata] = useState({
        title: '',
        type: '',
        file: null,
        content: '',
    });

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const response = await axios.get(`http://192.168.0.2:8080/boards/get/1`);
                const board = response.data;
                setFormdata({
                    title: board.title,
                    type: board.type,
                    file: board.file,
                    content: board.content,
                });
            } catch (error) {
                console.error("Error fetching board data:", error);
            }
        };

        fetchBoard();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditorChange = (value) => {
        setFormdata((prev) => ({
            ...prev,
            content: value,
        }));
    };

    const updateBoard = async () => {
        const updateData = new FormData();
        updateData.append("title", formdata.title);
        updateData.append("type", formdata.type);
        updateData.append("file", formdata.file);
        updateData.append("content", formdata.content);

        if (window.confirm("수정을 완료 하겠습니까?")) {
            try {
                const response = await axios.put(`http://192.168.0.2:8080/boards/update/1`, updateData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.status === 200) {
                    console.log("update", response.data);
                    alert("수정이 완료되었습니다.");
                }
            } catch (error) {
                console.log("error", error);
                alert("수정 중 오류가 발생했습니다.");
            }
        } else {
            console.log("cancel");
        }
    };

    return (
        <S.Container>
            <S.Input
                type="text"
                name="title"
                value={formdata.title}
                onChange={handleChange}
                placeholder="제목"
            />
            <S.Select
                name="type"
                value={formdata.type}
                onChange={handleChange}
            >
                <option value="Announcement">Announcement</option>
                <option value="Notice">Notice</option>
                <option value="Event">Event</option>
                <option value="Other">Other</option>
            </S.Select>
            <S.EditorWrapper>
                <QEditor value={formdata.content} onChange={handleEditorChange} />
            </S.EditorWrapper>
            <S.Button onClick={updateBoard}>수정하기</S.Button>
        </S.Container>
    );
};

export default BoardUpdate;
