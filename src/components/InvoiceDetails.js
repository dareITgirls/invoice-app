import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectInvoiceById } from "../store/invoicesSlice";

export const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));

  const changeDateFormat = (givenDate) => {
    const date = new Date(givenDate).toDateString().split(" ");
    const formatedDate = `${date[2]} ${date[1]} ${date[3]}`;

    return formatedDate;
  };
  const formatedCost = (cost) => {
    const parsedCost = parseFloat(cost);
    return parsedCost.toFixed(2);
  };

  const viewInvoiceItems = (items) => {
    return (
      <div className='grid grid-cols-3 p-5 md:grid-cols-5 gap-4 md:px-10 md:pb-3 md:pt-8'>
        <div className='md:grid col-span-2'>
          <h2 className='hidden md:grid text-base/1 mb-7'>Item Name</h2>
          {items.map((item, id) => (
            <div key={id} className='text-md/2 mb-3 md:mb-7'>
              {item.name}
              <p className='text-md/1 text-neutral-500 mt-2 md:hidden'>
                {item.quantity} x £ {formatedCost(item.price)}
              </p>
            </div>
          ))}
        </div>

        <div className='hidden md:grid col-span-1 justify-items-center justify-self-end'>
          <h2 className='md:text-base/1 mb-7'>QTY</h2>
          {items.map((item, id) => (
            <div key={id} className='hidden md:grid md:mb-7'>
              {item.quantity}
            </div>
          ))}
        </div>

        <div className='hidden md:grid col-span-1 justify-items-end'>
          <h2 className='md:text-base/1 mb-7'>Price</h2>
          {items.map((item, id) => (
            <div key={id} className='md:mb-7'>
              £ {item.price}
            </div>
          ))}
        </div>

        <div className='grid rows-span-2 md:grid col-span-1 justify-items-end'>
          <h2 className='hidden md:grid text-base/1 mb-7'>Total</h2>
          {items.map((item, id) => (
            <div key={id} className='text-md/1 md:mb-7'>
              £ {formatedCost(item.total)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className='flex-col my-5 mx-7 bg-light-100 dark:bg-dark-200 
    rounded-lg mb-20 p-5 md:m-0 md:mt-5 md:px-10 md:py-12'
    >
      <div className='md:flex flex-row md:justify-between md:pb-5'>
        <ul className='pb-7 md:pb-0'>
          <li className='text-md/2'>
            <span className='text-neutral-400'>#</span>
            {invoice.id}
          </li>
          <li className='text-neutral-500 dark:text-neutral-200 text-base/2'>
            {invoice.items[0].name}
          </li>
        </ul>
        <ul className='text-neutral-500 dark:text-neutral-200 text-base/2 pb-7 md:pb-0 md:text-right'>
          <li>{invoice.senderAddress.street}</li>
          <li>{invoice.senderAddress.city}</li>
          <li>{invoice.senderAddress.postCode}</li>
          <li>{invoice.senderAddress.country}</li>
        </ul>
      </div>
      <div className='md:flex flex-row justify-start'>
        <div className='grid grid-cols-2 grid-rows-1 gap-2 self-center mb-8 md:w-2/3'>
          <section>
            <span className='text-neutral-500 dark:text-neutral-200 text-base/2'>
              Invoice Date
            </span>
            <p className='text-md/2 mt-2'>
              {changeDateFormat(invoice.createdAt)}
            </p>
          </section>
          <section>
            <span className='text-neutral-500 dark:text-neutral-200 text-base/2'>
              Bill To
            </span>
            <p className='text-md/2 mt-2'>{invoice.clientName}</p>
          </section>
          <section className='self-center'>
            <span className='text-neutral-500 dark:text-neutral-200 text-base/2'>
              Payment Due
            </span>
            <p className='text-md/2 mt-2'>
              {changeDateFormat(invoice.paymentDue)}
            </p>
          </section>
          <section>
            <ul className='text-neutral-500 dark:text-neutral-200 text-base/1'>
              <li>{invoice.clientAddress.street}</li>
              <li>{invoice.clientAddress.city}</li>
              <li>{invoice.clientAddress.postCode}</li>
              <li>{invoice.clientAddress.country}</li>
            </ul>
          </section>
        </div>
        <div>
          <p className='text-neutral-500 dark:text-neutral-200 text-base/1'>
            Sent To
          </p>
          <p className='text-md/2 mt-2'>{invoice.clientEmail}</p>
        </div>
      </div>
      <div className='flex-col my-5 bg-neutral-100 dark:bg-dark-100 rounded-lg mt-10 md:mt-0'>
        {viewInvoiceItems(invoice.items)}
        <div className='bg-dark-500 text-light-100 dark:bg-dark-400 flex justify-between items-center px-5 py-6 rounded-b-lg md:px-10 md:py-8'>
          <p className='text-base/2'>Amount Due</p>
          <span className='text-lg'>£ {formatedCost(invoice.total)}</span>
        </div>
      </div>
    </div>
  );
};
