import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
const Container = styled.div`
  margin: 20px;
`;

const transformComments = (comments) => {
  const commentMap = {};
  comments.forEach((comment) => {
    commentMap[comment.commentId] = { ...comment, children: [] };
  });

  const rootComments = [];
  comments.forEach((comment) => {
    if (comment.parent === null) {
      rootComments.push(commentMap[comment.commentId]);
    } else {
      const parent = commentMap[comment.parent.commentId];
      parent.children.push(commentMap[comment.commentId]);
    }
  });

  return rootComments;
};

const CommentList = ({ boardId }) => {
  const localAddress = useSelector((state) => state.localAddress.value);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`${localAddress}comments/board/${boardId}`)
      .then((response) => setComments(transformComments(response.data)))
      .catch((error) => console.error(error));
  }, [boardId]);

  const addComment = (newComment) => {
    setComments((prevComments) =>
      transformComments([...prevComments, newComment])
    );
  };

  return (
    <Container>
      <h3>댓글</h3>
      <CommentForm boardId={boardId} parentId={null} addComment={addComment} />
      {comments.map((comment) => (
        <Comment
          key={comment.commentId}
          comment={comment}
          addComment={addComment}
        />
      ))}
    </Container>
  );
};

export default CommentList;
