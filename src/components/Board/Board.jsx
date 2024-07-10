import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./Board.style";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Board = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://192.168.0.2:8080/boards/get/{post_id}");
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

    const handleSearchClick = () => {
        console.log("Search clicked:", search);
    };

    return (
        <S.Container>
            <S.Wrap>
                <S.TableHeader>
                    <S.List>Title</S.List>
                    <S.List>User</S.List>
                    <S.List>Date</S.List>
                    <S.List>Content</S.List>
                    <S.List>Like</S.List>
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
                </S.TableHeader>
                <S.Table>
                    {data.map((board) => (
                        <S.TableRow key={board.userId}>
                            <S.TableCell>{board.title}</S.TableCell>
                            <S.TableCell>{board.user}</S.TableCell>
                            <S.TableCell>{board.createdAt}</S.TableCell>
                            <S.TableCell>{board.content}</S.TableCell>
                            <S.TableCell>{board.likes}</S.TableCell>
                        </S.TableRow>
                    ))}
                </S.Table>
            </S.Wrap>
        </S.Container>
    );
};

export default Board;
