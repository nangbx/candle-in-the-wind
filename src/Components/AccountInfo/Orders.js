import React from "react";
import OrdersItem from "./OrdersItem";
import OrdersHistory from "./OrdersHistory"
import "./Orders.scss"
export default function Orders({set}) {
	return (
		<div className="orders">
			<OrdersHistory set = {set}/>
		</div>
	);
}
