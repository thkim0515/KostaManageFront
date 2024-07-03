import React , {useState} from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.style";
import Login from "../../pages/Login/Login";
import SignModul from "../Sign/SignModul";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Nav>
          <ul>
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>
            <button onClick={openModal}>Open Modal</button>
            <SignModul isOpen={isModalOpen} onClose={closeModal} />
            </li>
            <li>
              <Link to="/SecondPage">서브2</Link>
              <Link to="/firstPage">테스트</Link>
            </li>
          </ul>
        </S.Nav>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
