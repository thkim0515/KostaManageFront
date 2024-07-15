import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./BoardList.style";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";

const BoardList = ({ BoardType }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const localAddress = useSelector((state) => state.localAddress.value);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${localAddress}boards/type/${BoardType}`,
          {
            params: { page: currentPage - 1, size: 10 },
          }
        );
        if (response.status === 200) {
          setData(response.data.content);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [BoardType, currentPage, localAddress]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`${localAddress}boards/all`, {
        params: {
          query: search,
          page: currentPage,
          size: 10,
        },
      });
      if (response.status === 200) {
        setData(response.data.content);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      alert("검색 내용을 찾을 수 없습니다");
    }
  };

  const handleRowClick = (postId) => {
    navigate(`/board/${postId}`); // 상세 페이지로 이동
  };

  const handleCreateClick = () => {
    navigate(`/board/create?boardType=${BoardType}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const rowsPerPage = 10; // 한 페이지에 보여줄 행의 수
  const emptyRows = rowsPerPage - data.length; // 빈 행의 수 계산

  return (
    <S.Container>
      <S.ButtonContainer>
        <S.CreateButton onClick={handleCreateClick}>작성하기</S.CreateButton>
      </S.ButtonContainer>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHeader>번호</S.TableHeader>
            <S.TableHeader>제목</S.TableHeader>
            <S.TableHeader>글쓴이</S.TableHeader>
            <S.TableHeader>작성일</S.TableHeader>
            <S.TableHeader>추천</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {data.map((board, index) => (
            <S.TableRow
              key={board.id}
              onClick={() => handleRowClick(board.postId)}
            >
              <S.TableCell>{index + 1}</S.TableCell>
              <S.TableCell>{board.title}</S.TableCell>
              <S.TableCell>{board.user.userId}</S.TableCell>
              <S.TableCell>
                {new Date(board.createdAt).toLocaleDateString()}
              </S.TableCell>
              <S.TableCell>{board.likes}</S.TableCell>
            </S.TableRow>
          ))}
          {Array.from({ length: emptyRows }).map((_, index) => (
            <S.TableRow key={index}>
              <S.TableCell colSpan="5">&nbsp;</S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
      <S.PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </S.PaginationContainer>
    </S.Container>
  );
};

export default BoardList;
