import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
	return (
		<div>
			<h1>Detail</h1>
			{/* Display selected item details */}
			<Link to="/board">목록</Link>
		</div>
	);
};

export default Detail;
