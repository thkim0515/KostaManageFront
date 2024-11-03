import React, { useState } from "react";
import styled from "styled-components";
import CommentForm from "./CommentForm";

const CommentWrapper = styled.div`
  margin-left: ${(props) => (props.isChild ? "20px" : "0px")};
  margin-bottom: 20px;
`;

const CommentContent = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const ReplyButton = styled.button`
  margin-top: 5px;
  padding: 5px 10px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Comment = ({ comment, addComment, isChild = false }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <CommentWrapper isChild={isChild}>
      <CommentContent>
        <strong>{comment.user.name}</strong>
        <p>{comment.content}</p>
        <ReplyButton onClick={() => setShowReplyForm(!showReplyForm)}>
          답글
        </ReplyButton>
      </CommentContent>
      {showReplyForm && (
        <CommentForm
          boardId={comment.board.postId}
          parentId={comment.commentId}
          addComment={addComment}
        />
      )}
      {comment.children &&
        comment.children.map((childComment) => (
          <Comment
            key={childComment.commentId}
            comment={childComment}
            addComment={addComment}
            isChild={true}
          />
        ))}
    </CommentWrapper>
  );
};

export default Comment;
