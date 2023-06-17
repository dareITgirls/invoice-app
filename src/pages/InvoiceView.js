import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectInvoiceById } from "../store/invoicesSlice";
import { Nav } from "../components/Nav";
import Label from "../UI/Label";
import BackArrow from "../assets/icon-arrow-left.svg";
import HeaderInvoiceView from "../components/HeaderInvoiceView";
import InvoiceDetails from "../components/InvoiceDetails";

const InvoiceView = () => {
  const { invoiceId } = useParams();
  const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <Link to={`/`}>
        <div className='flex items-center my-6 mx-7 md:mx-auto md:my-10 md:w-3/4 md:m-0 xl:w-1/2 2xl:w-1/3'>
          <img src={BackArrow} alt='back arrow' className='ml-2'></img>
          <span className='text-dark-300 dark:text-light-100 text-md/1 ml-3'>
            Go back
          </span>
        </div>
      </Link>

      <div className='text-dark-300 dark:text-light-100 flex items-center justify-center my-0'>
        <div className='flex flex-col w-full md:w-3/4 md:m-0 xl:w-1/2 2xl:w-1/3'>
          <div className='flex items-center justify-between mx-7 bg-light-100 dark:bg-dark-200 shadow-3xl rounded-lg p-5 md:hidden'>
            <span className='text-neutral-500 text-base/2'>Status </span>
            <Label status={invoice.status} />
          </div>
          <HeaderInvoiceView />
          <InvoiceDetails />
        </div>
      </div>
    </>
  );
};

export default InvoiceView;
