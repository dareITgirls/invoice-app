import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { deleteInvoice, editInvoice } from "../store/invoicesActions";
import { selectInvoiceById } from "../store/invoicesSlice";
import { toggleInvoiceStatus } from "../store/invoicesSlice";
import { Button } from "../UI/Button";
import Label from "../UI/Label";

const HeaderInvoiceView = () => {
  const { invoiceId } = useParams();
  const dispatch = useDispatch();
  const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));
  const navigate = useNavigate();

  const handleChangeStatusInvoice = () => {
    dispatch(toggleInvoiceStatus(invoiceId));
  };

  const handleEditInvoice = async () => {
    const updatedInvoice = { ...invoice, status: "paid" };
    dispatch(editInvoice(updatedInvoice));
  };

  const handleDeleteInvoice = async () => {
    if (invoice) {
      dispatch(deleteInvoice(invoiceId));
      navigate("/");
    }
  };

  return (
    <>
      <div className='hidden md:flex justify-between bg-light-100 dark:bg-dark-200 w-full items-center px-5 py-5 rounded-lg'>
        <div className='md:flex items-center'>
          <span className='text-neutral-500 text-base/2 md:mr-5'>Status </span>
          <Label status={invoice.status} />
        </div>
        <div className='md:flex items-center'>
          <Button
            className='bg-neutral-100 text-neutral-500 dark:bg-dark-100 dark:text-white rounded-full px-7 py-4 mr-3'
            title='Edit'
            onClick={handleEditInvoice}
          />
          <Button
            className='bg-red-500 text-white rounded-full px-7 py-4 mr-3'
            title='Delete'
            onClick={handleDeleteInvoice}
          />
          <Button
            className='bg-primary-200 text-white rounded-full px-7 py-4 w-34'
            id='markAsPaidButton'
            title={
              invoice.status === "paid" ? "Mark as Unpaid" : "Mark as Paid"
            }
            onClick={handleChangeStatusInvoice}
          />
        </div>
      </div>
      <div className='flex items-center justify-between fixed bottom-0 bg-light-100 dark:bg-dark-200 w-full p-5 md:hidden'>
        <Button
          className='bg-neutral-100 text-neutral-500 dark:bg-dark-100 dark:text-white rounded-full px-7 py-4 '
          title='Edit'
          onClick={handleEditInvoice}
        />
        <Button
          className='bg-red-500 text-white rounded-full px-7 py-4'
          title='Delete'
          onClick={handleDeleteInvoice}
        />
        <Button
          className='bg-primary-200 text-white rounded-full px-4 py-4'
          id='markAsPaidButton'
          title={invoice.status === "paid" ? "Mark as Unpaid" : "Mark as Paid"}
          onClick={handleChangeStatusInvoice}
        />
      </div>
    </>
  );
};

export default HeaderInvoiceView;
