import React from "react";
import * as S from "./ChatModal.style";
const ChatModal = ({ onClose }) => {
  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        <S.ChatContent>
          <h1>구현예정</h1>
        </S.ChatContent>
      </S.Modal>
    </S.Overlay>
  );
};

export default ChatModal;
