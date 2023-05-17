import { useDispatch, useSelector } from 'react-redux';
import { openNewFormModal } from '../store/newFormModalStatusSlice';
import { openFilterModal } from "../store/filterModalSlice";
import FilterModal from "./FilterModal";
import NewInvoice from "./NewInvoice";

const HeaderHome = () => {
	const invoices = useSelector(state => state.invoices.entities);
	const invoicesNumber = Object.keys(invoices).length;
	let invoicesNumberInfo;
	if (invoicesNumber === 0) {
		invoicesNumberInfo = <p>No invoices</p>;
	} else if (invoicesNumber === 1) {
		invoicesNumberInfo = <p>There is 1 invoice</p>;
	} else {
		invoicesNumberInfo = <p>There are {invoicesNumber} total invoices</p>;
	}

	const dispatch = useDispatch();
	const openNewInvoice = () => {
		dispatch(openNewFormModal());
	};

	const openStatusFilterModal = () => {
		dispatch(openFilterModal())
	}

	return (
		<div>
			<h1>Invoices</h1>
			{invoicesNumberInfo}
			<button onClick={openStatusFilterModal}>Filter by status</button>
			<FilterModal/>
			<button onClick={openNewInvoice}>New invoice</button>
			<NewInvoice />
		</div>
	);
};

export default HeaderHome;