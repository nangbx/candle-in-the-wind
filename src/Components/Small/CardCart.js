import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Slider from '@mui/material/Slider';
import "./CardCart.scss";
export default function CardCart({ totalPrice, voucher }) {
	const [value, setValue] = React.useState(0);
	const { user, trang_thai } = useSelector((state) => state.users);
	const handlePoints = (event, value) => {
		setValue(value)
	}
	const handleCheckout = () => {

	}
	return (
		<div>
			<Card sx={{ minWidth: 400, marginLeft: 2 }}>
				<CardContent>
					<h2>Cart total</h2>
					<div className='price'>
						<div className='name'>
							<p>Total products</p>
						</div>
						<div className='number'>
							<p>{totalPrice}</p>
						</div>
					</div>
					<div className='price'>
						<div className='name'>
							<p>Giảm giá</p>
						</div>
						<div className='number'>
							<p>{voucher}%</p>
						</div>
					</div>
					<div className='price'>
						<div className='name'>
							<p>Sử dụng điểm:</p>
						</div>
						<div className='number'>
							<Slider
								sx={{ width: 200}}
								size='small'
								defaultValue={0}
								aria-label='Small'
								valueLabelDisplay='auto'
								value={value|| 0}
								max={user.points}
								onChange={handlePoints}
							/>
							<p>{value}</p>
						</div>
					</div>
					<hr />
					<div className='price'>
						<div className='name'>
							<h3>Tổng:</h3>
						</div>
						<div className='number'>
							<p>{voucher !== 0 ? (totalPrice * voucher) / 100 : totalPrice}</p>
						</div>
					</div>
				</CardContent>
				<CardActions>
					<Button variant='contained' disableElevation onClick={handleCheckout}>
						Checkout
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
