import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import { addNewInvoice } from "../../store/invoicesActions";
import { closeNewFormModal } from "../../store/newFormModalStatusSlice";
import {
  ASSETS_LIBRARY,
  getItemTotal,
  getPaymentDue,
  getTotal,
} from "../../utils/consts";
import { invoiceSchema } from "../../utils/invoiceSchema";
import { SignupSchema } from "../../utils/validation";
import { Modal } from "../Modal";
import { Nav } from "../Nav";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { Footer } from "./Footer";
import { ItemList } from "./ItemList";

export const NewInvoice = () => {
  //const modalStatus = useSelector(state => state.newFormModalStatus.status);
  const dispatch = useDispatch();

  const discardHandler = () => {
    dispatch(closeNewFormModal());
  };

  const onSubmitHandler = (data) => {
    dispatch(addNewInvoice(data));
    dispatch(closeNewFormModal());
  };

  return (
    <Modal>
      <Nav />
      <button
        className='flex text-dark-400 text-md/1 pt-6 pl-6 items-center justify-between w-2/6 md:hidden'
        type='button'
        title='Go back'
        onClick={discardHandler}
      >
        <img src={ASSETS_LIBRARY.icons.arrowLeft} alt='left arrow' />
        Go back
      </button>
      <h1 className='text-dark-400 dark:text-neutral-200 text-xl pt-6 pl-6 md:text-lg lg:pl-39 lg:pt-14.5'>
        New Invoice
      </h1>
      <Formik
        initialValues={invoiceSchema}
        validationSchema={SignupSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={async (values, { resetForm }) => {
          values.paymentDue = getPaymentDue(
            values.createdAt,
            values.paymentTerms
          );
          values.items.map((item) => (item.total = getItemTotal(item)));
          values.total = getTotal(values.items);
          await onSubmitHandler(values);
          resetForm();
        }}
      >
        <Form action='POST' className='p-6 lg:pl-39 lg:pr-14'>
          <BillFrom />
          <BillTo />
          <ItemList />
          <Footer />
        </Form>
      </Formik>
    </Modal>
  );
};
