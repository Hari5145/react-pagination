import React from "react";

const Posts = ({ posts }) => {
	return (
		<ul className="list-group mb-5">
			{posts.map(post => (
				<div
					key={post.id}
					className="list-group-item list-group-item-action list-group-item-secondary mb-2"
					style={{ borderRadius: "5px" }}
				>
					<div
						className="list-group-item disabled mb-2"
						style={{ borderRadius: "5px" }}
					>
						Id: {post.id}
					</div>
					<div
						className="list-group-item list-group-item-primary"
						style={{ fontFamily: "cursive", borderRadius: "5px" }}
					>
						Title: {post.title}
					</div>
					<div style={{ fontFamily: "cursive" }}>{post.body}</div>
				</div>
			))}
		</ul>
	);
};

export default Posts;
