import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom';

import { AlertModal } from '../components/AlertModal';
import { deleteInvoice, editInvoice } from '../store/invoicesActions';
import { selectInvoiceById } from '../store/invoicesSlice';
import { toggleInvoiceStatus } from '../store/invoicesSlice';
import { closeNewFormModal, openNewFormModal } from '../store/newFormModalStatusSlice';
import { Button } from '../UI/Button';
import Label from '../UI/Label';
import BackArrow from "../assets/icon-arrow-left.svg";

const HeaderInvoiceView = () => {
	const { invoiceId } = useParams();

	const dispatch = useDispatch();

	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));

	const navigate = useNavigate();

	const handleChangeStatusInvoice = () => {
		dispatch(toggleInvoiceStatus(invoiceId));
	};

	const handleEditInvoice = async () => {
		const updatedInvoice = { ...invoice, status: 'paid' };
		dispatch(editInvoice(updatedInvoice));
	};

	const handleDeleteInvoice = async () => {
		if (invoice) {
			dispatch(deleteInvoice(invoiceId));
			discardHandler();
			navigate('/');
		}
	};

	const showModal = () => {
		dispatch(openNewFormModal());
	};

	const discardHandler = () => {
		dispatch(closeNewFormModal());
	};

	return (
		<>
			<Link to={`/`}>
				<div className='flex items-center mb-8 sm:mx-auto md:my-10 md:w-4/5 md:m-0 xl:w-1/2 2xl:w-1/3'>
					<img src={BackArrow} alt='back arrow' className='ml-2'></img>
					<span className='text-dark-300 dark:text-light-100 text-md/1 ml-3'>Go back</span>
				</div>
			</Link>
			<div className='flex items-center justify-between bg-light-100 dark:bg-dark-200 shadow-3xl rounded-lg p-5 sm:hidden'>
				<span className='text-neutral-500 text-base/2'>Status</span>
				<Label status={invoice.status} />
			</div>
			<div className="fixed bottom-0 left-0 sm:static flex items-center justify-between bg-light-100 dark:bg-dark-200 w-full p-5 sm:px-8 rounded-lg">
				<div className='hidden sm:flex items-center'>
					<span className='text-neutral-500 text-base/2 md:mr-5'>Status </span>
					<Label status={invoice.status} />
				</div>
				<div className="flex w-full sm:w-auto justify-between items-center">
					<Button
						styles='bg-neutral-100 text-neutral-500 dark:bg-dark-100 dark:text-white hover:bg-neutral-200 px-6 mr-2'
						title='Edit'
						onClick={handleEditInvoice}/>
					<Button styles='bg-red-500 text-white hover:bg-danger-50 px-6 mr-2' title='Delete' onClick={showModal} />
					<Button
						styles='bg-primary-200 text-white hover:bg-danger-100 px-7'
						id='markAsPaidButton'
						title={invoice.status === 'paid' ? 'Mark as Unpaid' : 'Mark as Paid'}
						onClick={handleChangeStatusInvoice}/>
				</div>
			</div>
			<AlertModal invoiceId={invoiceId}>
				<Button
					onClick={discardHandler}
					styles='bg-neutral-100 dark:bg-dark-100 text-neutral-500 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-light-100 dark:hover:text-neutral-500'
					title='Cancel'
					type='button'/>
				<Button onClick={handleDeleteInvoice} styles='bg-danger-150 text-light-100 hover:bg-danger-50 dark:hover:bg-danger-50' title='Delete' type='button' />
			</AlertModal>
		</>
	);
};

export default HeaderInvoiceView;
