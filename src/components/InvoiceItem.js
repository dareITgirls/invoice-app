import { useSelector } from 'react-redux';
import { selectInvoiceById } from '../store/invoicesSlice';
import Label from '../UI/Label';

const InvoiceItem = ({ id }) => {
	const invoice = useSelector(state => selectInvoiceById(state, id));

	return (
		<li className='bg-light-100 shadow-3xl min-h-33'>
			<table className='w-full'>
				<tr className='grid grid-cols-2 grid-rows-item-sm p-6 gap-1'>
					<td className='text-dark-300 text-md/1 row-start-1 col-start-1 pb-4'>
						<span className='text-neutral-400'>#</span>
						{invoice.id}
					</td>

					<td className='text-neutral-300 text-base/1 row-start-2 self-end'>Due {invoice.paymentDue}</td>

					<td className='text-neutral-400 text-base/1 row-start-1 col-start-2 justify-self-end self-start leading-3'>
						{invoice.clientName}
					</td>

					<td className='text-dark-300 text-md/2 row-start-3 self-end'>£ {invoice.total}</td>

					<td className='row-start-2 row-end-4 col-start-2 justify-self-end mt-3'>
						<Label status={invoice.status} />
					</td>
				</tr>
			</table>
		</li>
	);
};

export default InvoiceItem;
