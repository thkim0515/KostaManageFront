import React from "react";
import * as S from "./ContactList.style";
import { FaUser, FaStar, FaClock, FaBan, FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactList = () => {
  return (
    <S.Container>
      <S.Button>Add New Contact</S.Button>
      <Link to="/student-list">
        <S.MenuItem>
          <FaUser />
          All Contacts
        </S.MenuItem>
      </Link>
      <Link to="/student-list/starred">
        <S.MenuItem>
          <FaStar />
          Starred
        </S.MenuItem>
      </Link>
      <Link to="/student-list/pending">
        <S.MenuItem>
          <FaClock />
          Pending Approval
        </S.MenuItem>
      </Link>
      <Link to="/student-list/blocked">
        <S.MenuItem>
          <FaBan />
          Blocked
        </S.MenuItem>
      </Link>
      <S.CategoryTitle>CATEGORIES</S.CategoryTitle>
      <Link to="/student-list/engineers">
        <S.CategoryItem>
          <FaCircle style={{ color: "#4a90e2" }} />
          Engineers
        </S.CategoryItem>
      </Link>
      <Link to="/student-list/support">
        <S.CategoryItem>
          <FaCircle style={{ color: "#f5a623" }} />
          Support Staff
        </S.CategoryItem>
      </Link>
      <Link to="/student-list/sales">
        <S.CategoryItem>
          <FaCircle style={{ color: "#7ed321" }} />
          Sales Team
        </S.CategoryItem>
      </Link>
    </S.Container>
  );
};

export default ContactList;