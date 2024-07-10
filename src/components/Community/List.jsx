import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const List = () => {
	return (
		<div>
			<Link to="/write">글쓰기</Link>
			<ListItem />
		</div>
	);
};

export default List;
