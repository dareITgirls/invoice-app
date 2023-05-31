import { useDispatch, useSelector } from 'react-redux';
import { openNewFormModal } from '../store/newFormModalStatusSlice';
import { openFilterModal } from "../store/filterModalSlice";
import FilterModal from "./FilterModal";
import NewInvoice from "./NewInvoice";

const HeaderHome = () => {
	const dispatch = useDispatch();

	const invoices = useSelector(state => state.invoices.entities);

	const invoicesNumber = Object.keys(invoices).length;
	let invoicesNumberInfo;
	let invoiceNumberInfoVisibility = 'hidden md:visible'
	if (invoicesNumber === 0) {
		invoicesNumberInfo = <p className={invoiceNumberInfoVisibility}>No invoices</p>;
	} else if (invoicesNumber === 1) {
		invoicesNumberInfo = <p className={invoiceNumberInfoVisibility}>There is 1 invoice</p>;
	} else {
		invoicesNumberInfo = <p className={invoiceNumberInfoVisibility}>There are {invoicesNumber} total invoices</p>;
	}
	const openNewInvoice = () => {
		dispatch(openNewFormModal());
	};

	const openStatusFilterModal = () => {
		dispatch(openFilterModal())
	}

	return (
		<div className='grid grid-cols-3 grid-rows-2 px-6 md:px-12 pt-8 pb-0 md:pb-0 '>
			<h1 className=''>Invoices</h1>
			<div className='flex row-span-2'>
				<button className='' onClick={openStatusFilterModal}>Filter <span className='hidden md:visible'>by status</span></button>
				<svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
			</div>
			<FilterModal/>
			<button className='row-span-2' onClick={openNewInvoice}>New invoice</button>
			<NewInvoice />
			<p className=' md:hidden'>{invoicesNumber} invoices</p>
			{invoicesNumberInfo}
		</div>
	);
};

export default HeaderHome;
