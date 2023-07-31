import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { AlertModal } from '../components/AlertModal';
import { deleteInvoice, editInvoice } from '../store/invoicesActions';
import { selectInvoiceById } from '../store/invoicesSlice';
import { toggleInvoiceStatus } from '../store/invoicesSlice';
import { closeNewFormModal, openNewFormModal } from '../store/newFormModalStatusSlice';
import { Button } from '../UI/Button';
import Label from '../UI/Label';

const HeaderInvoiceView = () => {
	const { invoiceId } = useParams();

	const dispatch = useDispatch();

	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));

	const navigate = useNavigate();

	const modalStatus = useSelector(state => state.newFormModalStatus.status);

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
			<div className='hidden md:flex justify-between bg-light-100 dark:bg-dark-200 w-full items-center px-5 py-5 rounded-lg'>
				<div className='md:flex items-center'>
					<span className='text-neutral-500 text-base/2 md:mr-5'>Status </span>
					<Label status={invoice.status} />
				</div>

				<div className='md:flex items-center gap-2'>
					<Button
						styles='bg-neutral-100 text-neutral-500 dark:bg-dark-100 dark:text-white'
						title='Edit'
						onClick={handleEditInvoice}
					/>

					<Button styles='bg-red-500 text-white' title='Delete' onClick={showModal} />

					<Button
						styles='bg-primary-200 text-white'
						id='markAsPaidButton'
						title={invoice.status === 'paid' ? 'Mark as Unpaid' : 'Mark as Paid'}
						onClick={handleChangeStatusInvoice}
					/>
				</div>
			</div>

			<div className='flex items-center justify-between fixed bottom-0 bg-light-100 dark:bg-dark-200 w-full p-5 md:hidden'>
				<Button
					styles='bg-neutral-100 text-neutral-500 dark:bg-dark-100 dark:text-white'
					title='Edit'
					onClick={handleEditInvoice}
				/>

				<Button styles='bg-red-500' title='Delete' onClick={showModal} />

				<Button
					styles='bg-primary-200 text-white'
					id='markAsPaidButton'
					title={invoice.status === 'paid' ? 'Mark as Unpaid' : 'Mark as Paid'}
					onClick={handleChangeStatusInvoice}
				/>
			</div>

			{modalStatus &&
				createPortal(
					<AlertModal>
						<Button
							onClick={discardHandler}
							styles='bg-neutral-100 dark:bg-dark-100 text-neutral-500 dark:text-neutral-200'
							title='Cancel'
							type='button'
						/>

						<Button onClick={handleDeleteInvoice} styles='bg-danger-150 text-light-100' title='Delete' type='button' />
					</AlertModal>,
					document.body
				)}
		</>
	);
};

export default HeaderInvoiceView;
