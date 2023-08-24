import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as IconArrowDown } from '../assets/icon-arrow-down.svg';
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg';
import { toggleFilterModalOpening } from '../store/filterModalSlice';
import { openNewFormModal } from '../store/newFormModalStatusSlice';
import { FilterModal } from './FilterModal';

export const HeaderHome = () => {
	const loadingStatus = useSelector(state => state.invoices.status);
	const dispatch = useDispatch();

	const invoices = useSelector((state) => state.invoices.entities);

	const invoicesNumber = Object.keys(invoices).length;
	let invoicesNumberInfo;
	let invoiceNumberInfoVisibility = 'hidden md:inline text-base/2 text-neutral-300 md:col-span2';
	if (invoicesNumber === 0) {
		invoicesNumberInfo = <p className={invoiceNumberInfoVisibility}>No invoices</p>;
	} else if (invoicesNumber === 1) {
		invoicesNumberInfo = <p className={invoiceNumberInfoVisibility}>There is 1 invoice</p>;
	} else {
		invoicesNumberInfo = <p className={invoiceNumberInfoVisibility}>There are {invoicesNumber} total invoices</p>;
	}
	const openNewInvoice = () => {
		if (loadingStatus !== 'loading') {
			dispatch(openNewFormModal());
		}
	};

	const displayFilter = () => {
		dispatch(toggleFilterModalOpening());
  };

	return (
		<div className='grid grid-cols-3 md:grid-cols-4 grid-rows-2'>
			<h1 className='text-lg dark:text-light-100 md:text-xl md:col-span-2'>Invoices</h1>
			<button className='relative row-span-2 flex justify-end items-center'>
				<div className='text-dark-300 dark:text-light-100 text-md/2 mr-3' onClick={displayFilter}>
					Filter <span className='hidden md:inline'>by status</span>
				</div>
				<IconArrowDown />
				<FilterModal />
			</button>
			<div className='flex row-span-2 justify-end items-center'>
				<button
					className='flex row-span-2 w-22 h-11 md:w-46 md:h-12 ml-5 justify-around items-center md:self-center bg-primary-200 rounded-3xl'
					onClick={openNewInvoice}>
					<div className='flex justify-center items-center w-8 h-8 bg-light-100 rounded-full p-2 ml-2'>
						<IconPlus />
					</div>
					<p className='text-light-100 text-md/2 pl-1 pr-3'>
						New <span className='hidden md:inline'>invoice</span>
					</p>
				</button>
			</div>
			<p className='text-neutral-300 dark:text-light-100 text-base/1 md:hidden'>{invoicesNumber} invoices</p>
			{invoicesNumberInfo}
		</div>
	);
};
