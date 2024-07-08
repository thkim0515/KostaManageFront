import React from "react";
import dummyPosts from "./DummyData";

const PostList = () => {
	return (
		<div>
			<h2>게시글 목록</h2>
			<ul>
				{dummyPosts.map((post) => (
					<li key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
