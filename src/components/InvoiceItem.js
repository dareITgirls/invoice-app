import { useSelector } from 'react-redux';
import { selectInvoiceById } from '../store/invoicesSlice';
import { ReactComponent as ArrowRight } from '../assets/icon-arrow-right.svg'
import Label from '../UI/Label';

const InvoiceItem = ({ id }) => {
	const invoice = useSelector(state => selectInvoiceById(state, id));

	const changeDateFormat = givenDate => {
		const date = new Date(givenDate).toDateString().split(' ');
		const formattedDate = `${date[2]} ${date[1]} ${date[3]}`;
		return formattedDate;
	};

	return (
		<li className='bg-light-100 dark:bg-dark-200 shadow-3xl rounded-lg'>
			<table className='w-full'>
				<tbody>
				<tr className='grid grid-cols-2 md:grid-cols-5 p-6 gap-1'>
					<td className='text-dark-300 dark:text-light-100 text-md/1 row-start-1 col-start-1 pb-4 md:pb-0 md:self-center'>
						<span className='text-neutral-400'>#</span>
						{invoice.id}
					</td>
					<td className='text-neutral-300 dark:text-neutral-200 text-base/1 row-start-2 md:row-auto self-end md:self-center'>
						Due {changeDateFormat(invoice.paymentDue)}
					</td>
					<td className='text-neutral-400 dark:text-light-100 text-base/1 row-start-1 md:row-auto justify-self-end md:justify-self-auto self-start md:self-center leading-3'>
						{invoice.clientName}
					</td>
					<td className='text-dark-300 dark:text-light-100 text-md/2 row-start-3 md:row-auto self-end md: pr-8 md:justify-self-end md:self-center'>
						£ {invoice.total}
					</td>
					<td className='row-start-2 row-end-4 col-start-2 md:col-start-5 md:row-auto md:flex md:items-center justify-self-end md:justify-self-center mt-3 md:mt-0'>
						<Label status={invoice.status} />
						<ArrowRight className='hidden md:inline'/>
					</td>
				</tr>
				</tbody>
			</table>
		</li>
	);
};

export default InvoiceItem;
