import React, { useState } from "react";
import * as S from "./ChatButton.style";
import ChatModal from "./ChatModal";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.Container onClick={toggleModal}>
        <S.ChatIcon></S.ChatIcon>
      </S.Container>
      {isOpen && <ChatModal onClose={toggleModal} />}
    </>
  );
};

export default ChatButton;
