import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Loader from "./components/loader";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(5);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
			setPosts(res.data);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	// Get current Posts
	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Change page

	const paginate = pageNum => {
		setCurrentPage(pageNum);
	};

	return (
		<div className="container mt-5">
			<h1
				className="text-primary mb-3"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "10px",
				}}
			>
				My Pagination
			</h1>
			{loading === true ? <Loader /> : <Posts posts={currentPosts} />}
			<Pagination
				postsPerPage={postPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
