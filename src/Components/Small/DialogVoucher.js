import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import DialogContent from "@mui/material/DialogContent";
import VoucherItem from "./VoucherItem";
import { API_URL } from "../../const";
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';

function SimpleDialog(props) {
	const [voucher, setVoucher] = useState();
	useEffect(() => {
		fetch(`${API_URL}/api/Vouchers`, {
			method: 'GET',
			headers:{
				Authorization: "Bearer " + `${localStorage.getItem("accessToken")}`
			}
		})
			.then(res => res.json())
			.then(data => setVoucher(data))
	}, [])
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	return (
		<Dialog
			disableScrollLock
			maxWidth={"sm"}
			fullWidth={true}
			onClose={handleClose}
			open={open}
		>
			<DialogTitle>Mã giảm giá</DialogTitle>
			<DialogContent>
				<List sx={{ pt: 2 }}>
					{voucher ? voucher.map(item => (
						<ListItem
						sx={{ pt: 3, height: 200 }}
						button
						onClick={() => handleListItemClick(item)}
						key={item.id}
					>
						<VoucherItem voucher={item}/>
					</ListItem>
					)): (
					<Box sx={{ display: "flex" }}>
						<CircularProgress />
					</Box>
				)}
				</List>
			</DialogContent>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};
export default function DialogVoucher({setVoucher}) {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState('');
	const [selectedName, setSelectedName] = React.useState('')
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (item) => {
		setOpen(false);
		setSelectedValue(item.value);
		setVoucher(item.value)
		setSelectedName(item.name)
	};

	return (
		<div>
			<Button variant='outlined' onClick={handleClickOpen}>
				Áp dụng mã giảm giá
			</Button>
			<SimpleDialog
				selectedValue={selectedValue}
				open={open}
				onClose={handleClose}
			/>
			<br />
			
			<Typography variant='subtitle1' component='div'>
				Mã giảm giá: {selectedName}
			</Typography>
		</div>
	);
}
