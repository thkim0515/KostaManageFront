import React, { useState } from "react";
import axios from "axios";

const CreateBoard = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.0.2:8080/boards/create",
        formData,
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="제목"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="목록 선택"
      />
      <button type="submit">확인</button>
    </form>
  );
};

export default CreateBoard;
