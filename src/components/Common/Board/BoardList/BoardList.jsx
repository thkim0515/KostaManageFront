import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./BoardList.style";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BoardList = ({ BoardType }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const localAddress = useSelector((state) => state.localAddress.value);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${localAddress}boards/type/${BoardType}`
        );
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {}
    };
    getData();
  }, [BoardType]);

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
      alert("검색 내용을 찾을 수 없습니다");
    }
  };

  const handleRowClick = (postId) => {
    navigate(`/board/${postId}`); // 상세 페이지로 이동
  };

  const handleCreateClick = () => {
    navigate(`/board/create?boardType=${BoardType}`);
  };

  console.log(data);
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
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default BoardList;
