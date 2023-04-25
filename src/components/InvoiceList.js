import { useSelector } from 'react-redux';
import { selectInvoiceId } from '../store/invoicesSlice';
import InvoiceItem from './InvoiceItem';
import EmptyInvoiceList from './EmptyInvoiceList';

const InvoiceList = () => {
	const invoiceIds = useSelector(selectInvoiceId);
	console.log(invoiceIds);

	const allInvoices = useSelector(state => state.invoices.entities);
	const invoicesNumber = Object.keys(allInvoices).length;

	const renderedListItems = invoiceIds.map(el => {
		return <InvoiceItem key={el} id={el} />;
	});

	if (invoicesNumber === 0) return <EmptyInvoiceList />;

	return <ul className='flex flex-col px-6 pt-8 pb-26 gap-4'>{renderedListItems}</ul>;
};

export default InvoiceList;
