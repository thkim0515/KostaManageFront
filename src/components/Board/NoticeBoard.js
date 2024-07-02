import React from 'react';

const NoticeBoard = ({ board }) => {
    if (!board) {
        return <div>Loading...</div>; // or any other placeholder
    }

    return (
        <div>
            <div>{board.cohortId} - {board.content}</div>
            <div>{board.createdAt} - {board.likes}</div>
            <div>{board.postDate} - {board.postId}</div>
            <div>{board.title} - {board.type}</div>
            <div>{board.updateAt} - {board.user}</div>
        </div>
    );
};

export default NoticeBoard;
