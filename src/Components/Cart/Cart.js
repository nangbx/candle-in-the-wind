import { useState, useEffect } from "react";
import React from "react"
import "./Cart.scss";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import CardCart from "../Small/CardCart";
import Voucher from "../Small/Voucher";
import CartItem from "./CartItem";

export default function Cart() {
	const { products, productCount, totalPrice } = useSelector(state => state.cart)
	const [voucher, setVoucher] = useState(0)
	const [list, setList] = useState([]) 
	console.log(products)
	useEffect(() => {
		setList(products)
	}, [products])
	return (
		<React.Fragment>

			<div>
				<div class='cart'>
					<h1>Your cart items</h1>
					<table>
						<thead>
							<th>Image</th>
							<th>Product Name</th>
							<th>Until Price</th>
							<th>Qty</th>
							<th>Subtotal</th>
							<th>Action</th>
						</thead>
						<tbody>
							{list.map(item => (
								<CartItem data={item}/>
							))}
						</tbody>
					</table>
					<div class='continue'>
						<Link to="/">Continue shopping</Link>
						<a href=''>Clear shopping cart</a>
					</div>
					<div class='footer'></div>
					<div className='card'>
						<Voucher setVoucher = {setVoucher}/>
						<CardCart totalPrice = {totalPrice} voucher={voucher}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
