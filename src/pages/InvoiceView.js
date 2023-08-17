// import React from "react";
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { EditInvoice } from '../components/forms/EditInvoice';
import HeaderInvoiceView from '../components/HeaderInvoiceView';
import InvoiceDetails from '../components/InvoiceDetails';
import { Nav } from '../components/Nav';
import { selectInvoiceById } from '../store/invoicesSlice';
import { Loader } from '../UI/Loader';
import { MainContentWrapper } from '../UI/MainContentWrapper';
import { PageContentWrapper } from '../UI/PageContentWrapper';

const InvoiceView = () => {
	const { invoiceId } = useParams();
	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));
	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	return (
		<>
			<div inert={modalStatus ? '' : undefined}>
				<PageContentWrapper>
					<Nav />
					<MainContentWrapper styles='lg:w-2xl'>
						<HeaderInvoiceView />
						{!invoice ? <Loader /> : <InvoiceDetails />}
					</MainContentWrapper>
				</PageContentWrapper>
			</div>
			{modalStatus && <EditInvoice />}
		</>
	);
};

export default InvoiceView;
