import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchInvoices,
  // editInvoice,
  // deleteInvoice,
} from "../store/invoicesActions";
import {
  selectInvoiceById,
  selectFilteredInvoiceId,
  invoicesLoaded,
} from "../store/invoicesSlice";
import { store } from "../store/store";
import { Nav } from "../components/Nav";
import { Link } from "react-router-dom";
import Label from "../UI/Label";
import { Button } from "../UI/Button";

const InvoiceView = () => {
  const { invoiceId } = useParams();
  const dispatch = useDispatch();
  const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));

  const changeDateFormat = (givenDate) => {
    const date = new Date(givenDate).toDateString().split(" ");

    const formatedDate = `${date[2]} ${date[1]} ${date[3]}`;

    return formatedDate;
  };

  // const formatedCost = (cost) => {
  //   return parseFloat(cost)
  //     .toFixed(2)
  //     .toString()
  //     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  const viewInvoiceItems = (items) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, id) => (
            <tr key={id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>£ {item.price}</td>
              <td>£ {item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    const fetchInvoicesIfNeeded = async () => {
      const filteredInvoiceIds = selectFilteredInvoiceId(store.getState()); // Pass the current state to the selector
      if (filteredInvoiceIds.length === 0) {
        const fetchedInvoices = await dispatch(fetchInvoices());
        dispatch(invoicesLoaded(fetchedInvoices.payload));
      }
    };

    fetchInvoicesIfNeeded();
  }, [dispatch]); // Add store.getState() as a dependency

  // const handleEditInvoice = async () => {
  //   const updatedInvoice = { ...invoice, status: "paid" };
  //   dispatch(editInvoice(updatedInvoice));
  // };

  // const handleDeleteInvoice = async () => {
  //   if (invoice) {
  //     dispatch(deleteInvoice(invoiceId));
  //     navigate("/");
  //   }
  // };

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='text-dark-300 dark:text-light-100'>
        <Nav />
        <Link to={`/`}>
          <div>
            <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.342.886L2.114 5.114l4.228 4.228'
                stroke='#9277FF'
                stroke-width='2'
                fill='none'
                fill-rule='evenodd'
              />
            </svg>{" "}
            Go back
          </div>
        </Link>
        <div>
          <div>
            Status <Label status={invoice.status} />
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <span className='text-neutral-400'>#</span>
                  {invoice.id}
                </li>
                <li>{invoice.items[0].name}</li>
              </ul>
            </div>

            <div>
              <ul className='text-neutral-300 dark:text-neutral-200 text-base/1'>
                <li>{invoice.senderAddress.street}</li>
                <li>{invoice.senderAddress.city}</li>
                <li>{invoice.senderAddress.postCode}</li>
                <li>{invoice.senderAddress.country}</li>
              </ul>
            </div>

            <div>
              <span className='text-neutral-300 dark:text-neutral-200 text-base/1'>
                Invoice Date
              </span>
              {changeDateFormat(invoice.createdAt)}
              <section>
                <span className='text-neutral-300 dark:text-neutral-200 text-base/1'>
                  Bill To
                </span>
                {invoice.clientName}
                <ul className='text-neutral-300 dark:text-neutral-200 text-base/1'>
                  <li>{invoice.clientAddress.street}</li>
                  <li>{invoice.clientAddress.city}</li>
                  <li>{invoice.clientAddress.postCode}</li>
                  <li>{invoice.clientAddress.country}</li>
                </ul>
              </section>
              <p>
                <span className='text-neutral-300 dark:text-neutral-200 text-base/1'>
                  Payment Due
                </span>
                {changeDateFormat(invoice.paymentDue)}
              </p>
            </div>

            <div>
              <p>Sent To</p>
              <p>{invoice.clientEmail}</p>
            </div>
            {viewInvoiceItems(invoice.items)}
          </div>

          <div>
            <p>Amount Due £ {invoice.total}</p>
          </div>

          <Button classname='bg-dark-200 text-white' title='Edit' />
          <Button classname='bg-red-500 text-white' title='Delete' />
          <Button classname='bg-primary-200 text-white' title='Mark as Paid' />
          {/* TODO add function to buttons */}
        </div>
      </div>
    </>
  );
};

export default InvoiceView;
