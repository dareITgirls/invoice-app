// import React from "react";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import HeaderInvoiceView from '../components/HeaderInvoiceView';
import InvoiceDetails from '../components/InvoiceDetails';
import { Nav } from '../components/Nav';
import { selectInvoiceById } from '../store/invoicesSlice';

const InvoiceView = () => {
	const { invoiceId } = useParams();
	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));

	if (!invoice) {
		return <div>Loading...</div>;
	}

	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	return (
		<div inert={modalStatus ? '' : undefined}>
			<div className='flex flex-col lg:flex-row relative lg:justify-center'>
				<Nav />
				<main className='px-6 md:px-12 pt-8 md:pt-15'>
						<HeaderInvoiceView />
						<InvoiceDetails />
				</main>
			</div>
		</div>
	);
};

export default InvoiceView;
