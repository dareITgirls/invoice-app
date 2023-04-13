import { useSelector } from 'react-redux';
import { selectInvoiceById } from '../store/invoicesSlice';

const InvoiceItem = ({ id }) => {
	const invoice = useSelector(state => selectInvoiceById(state, id));

	return (
		<li>
			<table>
				<tr>
					<td>{invoice.id}</td>
					<td>{invoice.paymentDue}</td>
					<td>{invoice.clientName}</td>
					<td>£ {invoice.total}</td>
					<td>{invoice.status}</td>
				</tr>
			</table>
		</li>
	);
};

export default InvoiceItem;
