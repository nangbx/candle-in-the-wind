import { useEffect, useState } from "react";
import "./InputNumber.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { notifySuccess, notifyWarning } from "../../Redux/Actions/Notify";
import { setCarts } from "../../Redux/Actions/Cart";
import { API_URL } from "../../const";
export default function InputNumber({ quantily,id }) {
	const dispatch = useDispatch();
	const [openDialog, setOpenDialog] = useState(false);
	const [value, setValue] = useState(quantily.count ? quantily.count : 1);
	const handleDecrement = () => {
		setValue((prev) => {
            if(value === 1){
				return prev;
			}
            quantily.count--;
			return prev - 1;
		});
	};
	const handleIncrement = () => {
		quantily.count++;
		setValue(value + 1);
	};
	const handleOnchange = (e) => {
		const reg = new RegExp("^[0-9]+$");
		if (reg.test(e.target.value)) setValue(parseInt(e.target.value));
		else if (e.target.value === "") {
			setValue(0);
		}
	};
	return (
		<div className='InputNumber'>
			<div className='input-number'>
				<button type='button' onClick={handleDecrement}>
					&minus;
				</button>
				<input value={value} onChange={handleOnchange} />
				<button type='button' onClick={handleIncrement}>
					&#43;
				</button>
			</div>
		</div>
	);
}
