import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import QEditor from "./QEditor"; // 경로를 올바르게 설정
import * as S from "./BoardCreate.style";

const BoardCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "Announcement",
    user: { userId: 1 },
    cohortId: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      content: value, // Quill의 HTML 콘텐츠로 저장
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.0.31:8080/boards/create",
        { ...formData, content: formData.content }, // HTML 문자열 그대로 전송
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("업로드 완료");
    } catch (error) {
      alert("업로드 실패");
    }
  };

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.Header>게시글 작성</S.Header>
        <S.TitleInput
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="제목을 입력해 주세요."
        />
        <S.EditorWrapper>
          <QEditor 
            value={formData.content} 
            onChange={handleEditorChange} 
          />
        </S.EditorWrapper>
        <S.ButtonContainer>
          <S.BackButton type="button" onClick={handleBackClick}>뒤로가기</S.BackButton>
          <S.Button type="submit">등록</S.Button>
        </S.ButtonContainer>
      </form>
    </S.Container>
  );
};

export default BoardCreate;
