import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ErrorPage } from './Error';
import { EditInvoice } from '../components/forms/EditInvoice';
import { HeaderInvoiceView } from '../components/HeaderInvoiceView';
import { InvoiceDetails } from '../components/InvoiceDetails';
import { selectInvoiceById } from '../store/invoicesSlice';
import { Loader } from '../UI/Loader';
import { MainContentWrapper } from '../UI/MainContentWrapper';
import { logErrorToService } from '../utils/consts'

const InvoiceView = () => {
	const { invoiceId } = useParams();
	const invoice = useSelector(state => selectInvoiceById(state, invoiceId));
	const modalStatus = useSelector(state => state.formModalStatus.status);
	const error = useSelector((state) => state.invoices.error);

	if (error) {
		throw new Error(error.message)
	}

	return (
		<ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}>
			<div inert={modalStatus ? '' : undefined}>
					<MainContentWrapper styles='lg:w-2xl'>
						<HeaderInvoiceView />
						{!invoice ? <Loader /> : <InvoiceDetails />}
					</MainContentWrapper>
			</div>
			{modalStatus && <EditInvoice />}
		</ErrorBoundary>
	);
};

export default InvoiceView;
