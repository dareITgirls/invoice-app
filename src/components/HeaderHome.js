import { useDispatch, useSelector } from 'react-redux';
import { openNewFormModal } from '../store/newFormModalStatusSlice';
import { openFilterModal } from "../store/filterModalSlice";
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import { ReactComponent as IconArrowDown } from '../assets/icon-arrow-down.svg'
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
			<h1 className='text-lg'>Invoices</h1>
			<div className='flex justify-end items-center row-span-2'>
				<button className='text-dark-300 dark:text-light-100 text-md/2 mr-3' onClick={openStatusFilterModal}>Filter <span className='hidden md:visible'>by status</span></button>
				<IconArrowDown/>
			</div>
			<div role='button' className='flex row-span-2 w-22 ml-5 justify-evenly items-center row-span-2 bg-primary-200 rounded-3xl'>
				<div className='flex justify-center items-center w-8 h-8 bg-light-100 rounded-full p-2'>
					<IconPlus/>
				</div>
				<p className='text-light-100 text-md/2 pl-1 pr-3' onClick={openNewInvoice}>New <span className='hidden md:visible'>invoice</span></p>
			</div>
			<p className='text-neutral-300 text-base/1 md:hidden'>{invoicesNumber} invoices</p>
			{invoicesNumberInfo}
		</div>
	);
};

export default HeaderHome;
