import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { EditInvoice } from '../components/forms/EditInvoice';
import { SingleInvoiceHeader } from '../components/SingleInvoiceHeader';
import { SingleInvoiceDetails } from '../components/SingleInvoiceDetails';
import { selectInvoiceById } from '../store/invoicesSlice';
import { Loader } from '../UI/Loader';
import { MainContentWrapper } from '../UI/MainContentWrapper';
import { logErrorToService } from '../utils/consts'
import { ErrorPage } from './Error';

export const SingleInvoice = () => {
	const {invoiceId} = useParams();
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
						<SingleInvoiceHeader />
						{!invoice ?
							<Loader /> :
							<SingleInvoiceDetails />}
					</MainContentWrapper>
			</div>
			{modalStatus && <EditInvoice />}
		</ErrorBoundary>
	);
};
