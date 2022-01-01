import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DialogVoucher from "./DialogVoucher";

export default function Voucher({setVoucher}) {
	
	return (
		<React.Fragment>
			<Card sx={{ minWidth: 275, height: 150}}>
				<CardContent>
					<h2>Mã giảm giá</h2>
					<DialogVoucher setVoucher={setVoucher}/>
				</CardContent>
			</Card>
		</React.Fragment>
	);
}
