// Pagination.js
import React from "react";
import PropTypes from "prop-types";
import * as S from "./Pagination.style";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handlePrevPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);

  const pages = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    pages.push(i);
  }

  return (
    <S.PaginationContainer>
      <S.PaginationButton
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        맨앞으로
      </S.PaginationButton>
      <S.PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
        이전
      </S.PaginationButton>
      {pages.map((page) => (
        <S.PaginationButton
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </S.PaginationButton>
      ))}
      <S.PaginationButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        다음
      </S.PaginationButton>
      <S.PaginationButton
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        맨뒤로
      </S.PaginationButton>
    </S.PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
