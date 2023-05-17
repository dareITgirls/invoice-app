import { useDispatch, useSelector } from 'react-redux';
import { openNewFormModal } from '../store/newFormModalStatusSlice';
import {filterChanged, openFilterModal} from "../store/filterModalSlice";
import FilterModal from "./FilterModal";
import NewInvoice from "./NewInvoice";

const HeaderHome = () => {
	const dispatch = useDispatch();

	const invoices = useSelector(state => state.invoices.entities);
	const filters = useSelector( state => state.filterModal.filters)

	const invoicesNumber = Object.keys(invoices).length;
	let invoicesNumberInfo;
	if (invoicesNumber === 0) {
		invoicesNumberInfo = <p>No invoices</p>;
	} else if (invoicesNumber === 1) {
		invoicesNumberInfo = <p>There is 1 invoice</p>;
	} else {
		invoicesNumberInfo = <p>There are {invoicesNumber} total invoices</p>;
	}
	const openNewInvoice = () => {
		dispatch(openNewFormModal());
	};

	const openStatusFilterModal = () => {
		dispatch(openFilterModal())
	}

	const onFilterChange = (filterType, changeType) => {
		dispatch(filterChanged(filterType, changeType))
	}

	return (
		<div>
			<h1>Invoices</h1>
			{invoicesNumberInfo}
			<button onClick={openStatusFilterModal}>Filter by status</button>
			<FilterModal filters={filters}
						 onChange={onFilterChange}/>
			<button onClick={openNewInvoice}>New invoice</button>
			<NewInvoice />
		</div>
	);
};

export default HeaderHome;
