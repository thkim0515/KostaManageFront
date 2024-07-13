import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./Board.style";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Board = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const localAddress = useSelector((state) => state.localAddress.value);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${localAddress}boards/all`);
        console.log("Response data:", response.data);
        if (response.status === 200) {
          setData(response.data); // response.data가 배열이라고 가정
        }
      } catch (error) {
        console.error("에러 발생으로 정보 못 가져옴", error);
      }
    };
    getData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`${localAddress}boards/all`, {
        params: {
          query: search,
        },
      });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log("검색 실패:", error);
      alert("검색 내용을 찾을 수 없습니다");
    }
  };

  const handleRowClick = (id) => {
    navigate(`/board/${id}`); // 상세 페이지로 이동
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <S.Input
          type="text"
          name="Search"
          value={search}
          onChange={handleSearchChange}
          placeholder="검색"
        />
        <S.SearchIcon icon={faSearch} onClick={handleSearchClick} />
      </S.SearchContainer>
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
            <S.TableRow key={board.id} onClick={() => handleRowClick(board.id)}>
              {" "}
              {/* Row 클릭 이벤트 추가 */}
              <S.TableCell>{index + 1}</S.TableCell>
              <S.TableCell>{board.title}</S.TableCell>
              <S.TableCell>{board.user.userId}</S.TableCell>
              <S.TableCell>
                {new Date(board.createdAt).toLocaleDateString()}
              </S.TableCell>{" "}
              {/* 날짜만 표시 */}
              <S.TableCell>{board.likes}</S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default Board;
