import { useSelector } from 'react-redux';
import { selectFilteredInvoiceId } from '../store/invoicesSlice';
import InvoiceItem from './InvoiceItem';
import EmptyInvoiceList from './EmptyInvoiceList';

const InvoiceList = () => {
	const invoiceIds = useSelector(selectFilteredInvoiceId);
	const allInvoices = useSelector(state => state.invoices.entities);
	const invoicesNumber = Object.keys(allInvoices).length;


	const renderedListItems = invoiceIds.map(id => {
		return <InvoiceItem key={id} id={id} />;
	});

	if (invoicesNumber === 0) return <EmptyInvoiceList />;

	return <ul className='flex flex-col px-6 md:px-12 pt-8 pb-26 md:pb-0 gap-4'>{renderedListItems}</ul>;
};

export default InvoiceList;
