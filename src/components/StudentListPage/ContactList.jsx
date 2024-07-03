import React from "react";
import * as S from "./ContactList.style";
import { FaUser, FaStar, FaClock, FaBan, FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactList = () => {
  return (
    <S.Container>
      <S.Button>새로 추가</S.Button>
      <Link to="/student-list">
        <S.MenuItem>
          <FaUser />
          학생 목록
        </S.MenuItem>
      </Link>
      <Link to="/student-list/starred">
        <S.MenuItem>
          <FaStar />
          즐겨찾기
        </S.MenuItem>
      </Link>
      <Link to="/student-list/pending">
        <S.MenuItem>
          <FaClock />
          최근 목록
        </S.MenuItem>
      </Link>
      <Link to="/student-list/blocked">
        <S.MenuItem>
          <FaBan />
          차단 목록
        </S.MenuItem>
      </Link>
      <S.CategoryTitle>카테고리</S.CategoryTitle>
      <Link to="/student-list/engineers">
        <S.CategoryItem>
          <FaCircle style={{ color: "#4a90e2" }} />
          개발자
        </S.CategoryItem>
      </Link>
      <Link to="/student-list/support">
        <S.CategoryItem>
          <FaCircle style={{ color: "#f5a623" }} />
          연구원
        </S.CategoryItem>
      </Link>
      <Link to="/student-list/sales">
        <S.CategoryItem>
          <FaCircle style={{ color: "#7ed321" }} />
          강사
        </S.CategoryItem>
      </Link>
    </S.Container>
  );
};

export default ContactList;