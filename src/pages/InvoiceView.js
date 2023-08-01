import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import BackArrow from "../assets/icon-arrow-left.svg";
import HeaderInvoiceView from "../components/HeaderInvoiceView";
import InvoiceDetails from "../components/InvoiceDetails";
import { Nav } from "../components/Nav";
import { selectInvoiceById } from "../store/invoicesSlice";
import Label from "../UI/Label";

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
        <div className='flex items-center my-9 mx-6 md:mx-11 md:my-14 lg:mx-28 xl:ml-64 xl:mr-60 2xl:mx-auto 2xl:w-[49.34rem] 2xl:my-20'>
          <img src={BackArrow} alt='back arrow' className='ml-2'></img>
          <span className='text-dark-300 dark:text-light-100 text-md/1 ml-3'>
            Go back
          </span>
        </div>
      </Link>

      <div className='text-dark-300 dark:text-light-100 flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-28 xl:ml-64 xl:mr-60 2xl:mx-auto 2xl:w-[49.34rem]'>
        {/* <div className='flex flex-col md:mx-12 lg:mx-40'> */}
        <div className='flex items-center justify-between w-full mx-7 bg-light-100 dark:bg-dark-200 shadow-3xl rounded-lg px-5 py-7 md:hidden'>
          <span className='text-neutral-500 text-base/2'>Status </span>
          <Label status={invoice.status} />
        </div>
        <HeaderInvoiceView />
        <InvoiceDetails />
        {/* </div> */}
      </div>
    </>
  );
};

export default InvoiceView;
