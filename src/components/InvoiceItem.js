import { useSelector } from 'react-redux';
import { selectInvoiceById } from '../store/invoicesSlice';
import Label from '../UI/Label';

const InvoiceItem = ({ id }) => {
	const invoice = useSelector(state => selectInvoiceById(state, id));

	return (
		<li>
			<table>
				<tr>
					<td className='text-dark-300 text-md/1'>
						<span className='text-neutral-400 text-'>#</span>
						{invoice.id}
					</td>
					<td className='text-neutral-300 text-base/1'>{invoice.paymentDue}</td>
					<td className='text-neutral-400 text-base/1'>{invoice.clientName}</td>
					<td className='text-dark-300 text-md/2'>£ {invoice.total}</td>
					<Label status={invoice.status} />
				</tr>
			</table>
		</li>
	);
};

export default InvoiceItem;
