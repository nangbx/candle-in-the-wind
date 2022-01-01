import React, { useEffect, useState } from "react";
import "./ListPost.scss";
import Pagination from "../Small/PaginationMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchGetPost } from "../../Redux/Actions/Posts";
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';
import { API_URL } from "../../const";

export default function ListPost() {
	const dispatch = useDispatch();
	const {posts, reset} = useSelector((state) => state.posts);
	console.log(posts)
	useEffect(() => {
		dispatch(actFetchGetPost())
	}, []);
	const handleClick = (e) => {
		console.log(e.target);
	};
	return (
		<div>
			<div className='forum'>
				<h1>Forum</h1>
				{posts[0] ? (
					posts[0].map((item) => (
						<div className='forum-item' key={item.key}>
							<div className='user'>
								<i className='fas fa-user' />
								<h4>{item.userName}</h4>
							</div>
							<div className='info'>
								<p>{item.approvedAt}</p>
								<Link
									to={{
										pathname: `/forum/${item.id}`,
									}}
								>
									{item.title}
								</Link>
								<div className='comments'>{item.commentCount} comments</div>
							</div>
						</div>
					))
				) : (
					<Box sx={{ display: "flex" }}>
						<CircularProgress />
					</Box>
				)}
				<div className='pagination'>
					<Pagination />
				</div>
			</div>
		</div>
	);
}
