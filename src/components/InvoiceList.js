import { useSelector } from 'react-redux';

import { selectFilteredInvoiceId } from '../store/invoicesSlice';
import { EmptyInvoiceList } from './EmptyInvoiceList';
import { InvoiceItem } from './InvoiceItem';

export const InvoiceList = () => {
	const loadingStatus = useSelector(state => state.invoices.status);
	const invoiceIds = useSelector(selectFilteredInvoiceId);
	const allInvoices = useSelector(state => state.invoices.entities);
	const invoicesNumber = Object.keys(allInvoices).length;

	const renderedListItems = invoiceIds.map(id => {
		return <InvoiceItem key={id} id={id} />;
	});

	if ((loadingStatus !== "loading") && (invoicesNumber === 0)) return <EmptyInvoiceList />;

	return <ul className='flex flex-col pt-8 md:pt-14 pb-26 gap-4'>{renderedListItems}</ul>;
};

