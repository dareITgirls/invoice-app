// import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import HeaderInvoiceView from '../components/HeaderInvoiceView';
import InvoiceDetails from '../components/InvoiceDetails';
import { Nav } from '../components/Nav';
import { selectInvoiceById } from '../store/invoicesSlice';
import {MainContentWrapper} from "../UI/MainContentWrapper";
import {Loader} from "../UI/Loader";
import React from "react";

const InvoiceView = () => {
	const { invoiceId } = useParams();
	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));
	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	return (
		<div inert={modalStatus ? '' : undefined}>
			<div className='flex flex-col lg:flex-row relative lg:justify-center'>
				<Nav />
				<MainContentWrapper styles='lg:w-2xl'>
						<HeaderInvoiceView />
					{ !invoice ? <Loader/> : <InvoiceDetails />}
				</MainContentWrapper>
			</div>
		</div>
	);
};

export default InvoiceView;
