import React from "react";
import * as S from "./MainPage.style";
import StudentManagePage from "../../components/StudentManagePage/StudentManagePage";
import CommentComponent from "../../components/Common/Comment/CommentComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const MainPage = () => {
  const localAddress = useSelector((state) => state.localAddress.value);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${localAddress}users/id/1`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <S.Container>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>{" "}
      <StudentManagePage />
      <CommentComponent />
    </S.Container>
  );
};

export default MainPage;
