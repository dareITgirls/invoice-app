import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addNewInvoice } from '../../store/invoicesActions';
import { editInvoice } from '../../store/invoicesActions';
import { selectInvoiceById } from '../../store/invoicesSlice';
import { toggleFormModal } from '../../store/formModalStatusSlice';
import { ReactComponent as IconArrowLeft } from '../../assets/icon-arrow-left.svg';
import { calculateInvoiceValues } from '../../utils/consts';
import { SignupSchema } from '../../utils/validation';
import { invoiceSchema } from '../../utils/invoiceSchema';
import { Modal } from '../../UI/Modal';
import { BillFrom } from './BillFrom';
import { BillTo } from './BillTo';
import { FooterNewInvoice } from './FooterNewInvoice';
import { FooterEditInvoice } from './FooterEditInvoice';
import { ItemList } from './ItemList';

export const FormTemplate = ({ type }) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.formModalStatus.status);

  const getInvoiceValues = () => {
    if (type === 'edit') {
      const { invoiceId } = useParams();
      const invoice = useSelector((state) =>
        selectInvoiceById(state, invoiceId),
      );
      const unfreezedInvoice = structuredClone(invoice);
      return unfreezedInvoice;
    }
  };

  const handleDiscard = () => {
    dispatch(toggleFormModal(false));
  };

  const handleSubmit = (data) => {
    type === 'edit'
      ? dispatch(editInvoice(data))
      : dispatch(addNewInvoice(data));
    dispatch(toggleFormModal(false));
  };

  const className =
    'flex flex-col bg-white h-full overflow-y-scroll dark:bg-dark-300 absolute mt-[72px] w-full md:mt-[80px] md:rounded-r-2xl lg:w-3/5 2xl:w-2/5 lg:ml-[105px] lg:mt-0';

  return (
    <Modal
      className={className}
      handleDiscard={handleDiscard}
      modalStatus={modalStatus}
    >
      <div className="md:hidden flex items-center pt-8 pl-6">
        <IconArrowLeft />
        <button
          className="text-dark-400 dark:text-neutral-200 text-md/1 ml-3 items-center"
          type="button"
          title="Go back"
          onClick={handleDiscard}
        >
          Go back
        </button>
      </div>
      <h1 className="text-dark-400 dark:text-neutral-200 text-lg/2 pt-7 pl-6 md:text-lg md:pt-16 md:pl-13.5 lg:pt-16">
        {type === 'new' ? 'New Invoice' : `Edit #${getInvoiceValues().id}`}
      </h1>
      <Formik
        initialValues={type === 'new' ? invoiceSchema : getInvoiceValues()}
        validationSchema={SignupSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={async (values, { resetForm }) => {
          calculateInvoiceValues(values);
          await handleSubmit(values);
          resetForm();
        }}
      >
        <Form
          action="POST"
          className="px-6 py-5 md:pt-[52px] md:pl-13.5 md:pr-14 lg:pr-14 lg:pt-[50px]"
        >
          <BillFrom />
          <BillTo />
          <ItemList />
          {type === 'new' ? <FooterNewInvoice /> : <FooterEditInvoice />}
        </Form>
      </Formik>
    </Modal>
  );
};
