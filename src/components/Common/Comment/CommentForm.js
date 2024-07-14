import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = styled.form`
  margin-top: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  margin-top: 5px;
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CommentForm = ({ boardId, parentId, addComment }) => {
  const [content, setContent] = useState("");
  const localAddress = useSelector((state) => state.localAddress.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      board: { postId: boardId },
      user: { userId: 1 },
      content: content,
      parent: parentId ? { commentId: parentId } : null,
    };

    axios
      .post(`${localAddress}comments/create`, newComment)
      .then((response) => {
        addComment(response.data);
        setContent("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="댓글 내용"
        required
      />
      <SubmitButton type="submit">작성하기</SubmitButton>
    </Form>
  );
};

export default CommentForm;
