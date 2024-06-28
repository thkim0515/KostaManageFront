import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import PostList from "../../components/PostList";
import * as S from "./MainPage.style";
import MainInfoL from "../../components/MainInfo/MainInfoL";
import MainInfoR from "../../components/MainInfo/MainInfoR";
import MainInfoU from "../../components/MainInfo/MainInfoU";
import MainInfoM from "../../components/MainInfo/MainInfoM";
// `MainPage` 컴포넌트 정의
const MainPage = () => {
	return (
		<S.Container>
			<S.Warapper></S.Warapper>
		</S.Container>
	);
};

export default MainPage;
