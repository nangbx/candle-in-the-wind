import {
	Box,
	Button,
	Card,
	CardHeader,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState, useEffect } from "react";
import { SeverityPill } from "./SeverityPill";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { API_URL } from "../../const";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function OrdersHistory({set}) {
	const [orders, setOrders] = useState();
	useEffect(() => {
		fetch(`${API_URL}/api/Orders/MyOrders`, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + `${localStorage.getItem("accessToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, []);
	return (
		<Card>
			<CardHeader title='Lịch sử đơn hàng' />

			<Box sx={{ minWidth: 800 }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Order ID</TableCell>
							<TableCell>Product name</TableCell>
							<TableCell sortDirection='desc'>Tổng giá</TableCell>
							<TableCell>Trạng thái</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{orders
							? orders.map((order) => (
									<TableRow hover key={order.id}>
										<TableCell>{order.id}</TableCell>
										<TableCell>
											<Stack spacing={2}>
												{order ? order.productName.map(item => (
                                                    <Item>{item}</Item>
                                                )): <Item></Item>}
											</Stack>
										</TableCell>
										<TableCell>{order.total}</TableCell>
										<TableCell>
											<SeverityPill
												color={
													(order.statusNames === "Đã duyệt" && "success") ||
													(order.status === "refunded" && "error") ||
													"warning"
												}
											>
												{order.statusName}
											</SeverityPill>
										</TableCell>
										<TableCell>
											<Button variant='outlined' startIcon={<DeleteIcon />}>
												Hủy đơn
											</Button>
										</TableCell>
									</TableRow>
							  ))
							: ""}
					</TableBody>
				</Table>
			</Box>
		</Card>
	);
}
