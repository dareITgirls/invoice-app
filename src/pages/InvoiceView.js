// import React from "react";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import BackArrow from '../assets/icon-arrow-left.svg';
import HeaderInvoiceView from '../components/HeaderInvoiceView';
import InvoiceDetails from '../components/InvoiceDetails';
import { Nav } from '../components/Nav';
import { selectInvoiceById } from '../store/invoicesSlice';
import Label from '../UI/Label';

const InvoiceView = () => {
	const { invoiceId } = useParams();
	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));

	if (!invoice) {
		return <div>Loading...</div>;
	}

	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	return (
		<div inert={modalStatus ? '' : undefined}>
			<Nav />
				<div className='text-dark-300 dark:text-light-100 flex items-center justify-center my-0'>
					<div className='flex flex-col w-full sm:w-4/5 md:m-0 xl:w-1/2'>
						<HeaderInvoiceView />
						<InvoiceDetails />
					</div>
				</div>
		</div>
	);
};

export default InvoiceView;
