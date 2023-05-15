import { useDispatch, useSelector } from 'react-redux';
import { openNewFormModal } from '../store/newFormModalStatusSlice';

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

	return (
		<div>
			<h1>Invoices</h1>
			{invoicesNumberInfo}
			<button onClick={openNewInvoice}>New invoice</button>
		</div>
	);
};

export default HeaderHome;
