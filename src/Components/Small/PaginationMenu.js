import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import './Pagination.scss'
export default function PaginationMenu() {
	return (
		<div className="pagination">
			<Pagination count={10} color='primary' />
		</div>
	);
}
