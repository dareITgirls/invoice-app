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
		<div className='grid grid-cols-3 grid-rows-2 gap-2 px-6 md:px-12 pt-8 pb-0 md:pb-0 '>
			<h1 className='text-lg'>Invoices</h1>
			<div className='flex justify-end items-center row-span-2'>
				<button className='text-dark-300 dark:text-light-100 text-md/2 mr-3' onClick={openStatusFilterModal}>Filter <span className='hidden md:visible'>by status</span></button>
				<svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
			</div>
			<div role='button' className='flex row-span-2 justify-center items-center row-span-2 bg-primary-200 rounded-3xl'>
				<div className='bg-light-100 rounded-full p-2'>
					<svg className='' width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/></svg>
				</div>
				<p className='text-light-100 text-md/2' onClick={openNewInvoice}>New <span className='hidden md:visible'>invoice</span></p>
			</div>
			<p className='text-neutral-300 text-base/1 md:hidden'>{invoicesNumber} invoices</p>
			{invoicesNumberInfo}
		</div>
	);
};

export default HeaderHome;
