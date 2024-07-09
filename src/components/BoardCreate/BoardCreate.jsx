import axios from "axios";
import React, { useState } from "react";
import RefEditor from "../BoardDetail/RefEditor";
import * as S from "./BoardCreate.style";

const BoardCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    file: null,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleEditorChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleUpload = async () => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("type", formData.type);
    data.append("file", formData.file);
    data.append("content", formData.content);

    try {
      const response = await axios.post("#", data);
      console.log(response.status);
      if (response.status === 200) {
        console.log("perfect upload", response.data);
        alert("업로드 완료");
      } else {
        alert("업로드 실패");
      }
    } catch (error) {
      console.log("upload fail", error);
      alert("에러가 발생했습니다");
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="제목"
      />
      <S.Input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="목록 선택"
      />
      <S.EditorWrapper>
        <RefEditor value={formData.content} onChange={handleEditorChange} />
      </S.EditorWrapper>
      <S.Button onClick={handleUpload}>업로드</S.Button>
    </S.Container>
  );
};

export default BoardCreate;
