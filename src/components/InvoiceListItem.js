import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../assets/icon-arrow-right.svg";
import { selectInvoiceById } from "../store/invoicesSlice";
import { Label } from "../UI/Label";
import { changeDateFormat } from '../utils/consts'

export const InvoiceListItem = ({ id }) => {
  const invoice = useSelector((state) => selectInvoiceById(state, id));

  return (
    <Link to={`/${invoice.id}`}>
      <li className='bg-light-100 dark:bg-dark-200 shadow-3xl rounded-lg hover:border hover:border-primary-200 cursor-pointer'>
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
              <td className='text-neutral-400 dark:text-light-100 text-base/1 row-start-1 md:row-auto justify-self-end md:justify-self-auto
                             self-start md:self-center leading-3'>
                {invoice.clientName}
              </td>
              <td className='text-dark-300 dark:text-light-100 text-md/2 row-start-3 md:row-auto self-end md:pr-10 md:justify-self-end md:self-center'>
                £ {invoice.total}
              </td>
              <td className='row-start-2 row-end-4 col-start-2 md:col-start-5 md:row-auto md:flex md:items-center justify-self-end md:justify-self-center
                            mt-3 md:mt-0'>
                <Label status={invoice.status} />
                <ArrowRight className='hidden md:inline' />
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    </Link>
  );
};
