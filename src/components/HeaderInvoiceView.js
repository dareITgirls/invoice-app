import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toggleAlertModal } from '../store/alertModalStatusSlice';
import { changeInvoiceStatus, deleteInvoice } from '../store/invoicesActions';
import { selectInvoiceById } from '../store/invoicesSlice';
import { toggleFormModal } from '../store/formModalStatusSlice';
import { Button } from '../UI/Button';
import Label from '../UI/Label';
import { AlertModal } from './AlertModal';
import { GoBack } from "../UI/GoBack";

export const HeaderInvoiceView = () => {
	const { invoiceId } = useParams();
	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleEditInvoice = async () => {
		dispatch(toggleFormModal(true));
	};

	const showAlertModal = () => {
		dispatch(toggleAlertModal(true));
	};

	const discardAlertModal = () => {
		dispatch(toggleAlertModal(false));
	};

	const handleDeleteInvoice = async () => {
		if (invoice) {
			dispatch(deleteInvoice(invoiceId));
			discardAlertModal();
			navigate('/');
		}
	};
	
	const handleChangeStatusInvoice = async () => {
		dispatch(changeInvoiceStatus(invoice))
	};

	return (
		<>
			<GoBack title="Go back"/>
			<div className='sm:hidden flex items-center justify-between bg-light-100 dark:bg-dark-200 shadow-3xl rounded-lg p-5'>
				<span className='text-neutral-500 dark:text-neutral-200 text-base/2'>Status</span>
				<Label status={invoice.status} />
			</div>
			<div className='fixed bottom-0 left-0 sm:static flex items-center justify-between bg-light-100 dark:bg-dark-200 w-full p-5 sm:px-8 rounded-lg'>
				<div className='hidden sm:flex items-center'>
					<span className='text-neutral-500 dark:text-neutral-200 text-base/2 sm:mr-5'>Status</span>
					<Label status={invoice.status} />
				</div>
				<div className='flex w-full sm:w-auto justify-center items-center'>
					<Button
						styles='px-20 mr-2'
						variant="neutral"
						title='Edit'
						onClick={handleEditInvoice}
					/>
					<Button styles='px-6 mr-2'
							title='Delete'
							variant='warning'
							onClick={showAlertModal} />
					<Button
						disabled={invoice.status === 'draft' ? true : false}
						styles ='w-40 md:px-4'
						variant = {invoice.status === 'draft' ? 'disabled' : 'primary'}
						id='markAsPaidButton'
						title={invoice.status === 'paid' ? 'Mark as Unpaid' : 'Mark as Paid'}
						onClick={handleChangeStatusInvoice}
					/>
				</div>
			</div>
			<AlertModal invoiceId={invoiceId}>
				<Button
					onClick={discardAlertModal}
					styles='bg-neutral-100 dark:bg-dark-100 text-neutral-500 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-light-100 dark:hover:text-neutral-500'
					title='Cancel'
					type='button'
				/>
				<Button
					onClick={handleDeleteInvoice}
					styles='bg-danger-150 text-light-100 hover:bg-danger-50 dark:hover:bg-danger-50'
					title='Delete'
					type='button'
				/>
			</AlertModal>
		</>
	);
};

