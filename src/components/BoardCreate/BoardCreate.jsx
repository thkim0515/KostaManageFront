import React, { useState } from "react";
import axios from "axios";
import QEditor from "./QEditor"; // 경로를 올바르게 설정
import * as S from "./BoardCreate.style";

const BoardCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "Announcement",
    user: { userId: 2 },
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
        "http://192.168.19.66:8080/boards/create",
        { ...formData, content: JSON.stringify(formData.content) }, // Delta를 문자열로 변환하여 전송
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

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="제목"
        />
        {/* <S.Select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a type
          </option>
          <option value="Announcement">Announcement</option>
          <option value="Notice">Notice</option>
          <option value="Event">Event</option>
          <option value="Other">Other</option>
        </S.Select> */}
        <S.EditorWrapper>
          <QEditor 
            value={formData.content} 
            onChange={handleEditorChange} 
          />
        </S.EditorWrapper>
        <S.Button type="submit">확인</S.Button>
      </form>
    </S.Container>
  );
};

export default BoardCreate;
