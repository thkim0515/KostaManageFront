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
	const [data, setData] = useState(null);

	const onClick = async () => {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/todos/1"
			);
			setData(response.data);
			console.log(response.data);
		} catch (e) {
			console.error(e);
			alert("Error: 데이터를 불러올 수 없습니다.");
		}
	};

	return (
		<S.MainPage>
			<S.Content>
				<Button variant="outline-primary" onClick={onClick}>
					데이터 불러오기
				</Button>
				{data && (
					<div>
						<h2>API 응답 데이터:</h2>
						<p>ID: {data.id}</p>
						<p>Title: {data.title}</p>
						<p>Completed: {data.completed ? "True" : "False"}</p>
					</div>
				)}
				<Element />
				<Element withDummyData />
				<Label />
				<PostList />
			</S.Content>
		</S.MainPage>
	);
};

// 최종 `MainPage` 컴포넌트를 export
export default MainPage;
