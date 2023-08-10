import { Form,Formik } from 'formik';
import { useDispatch } from "react-redux";
import { addNewInvoice } from '../../store/invoicesActions';
import { closeNewFormModal } from "../../store/newFormModalStatusSlice";
import { ReactComponent as IconArrowLeft } from '../../assets/icon-arrow-left.svg';
import { getItemTotal, getPaymentDue,getTotal } from '../../utils/consts';
import { invoiceSchema } from '../../utils/invoiceSchema';
import { SignupSchema } from '../../utils/validation';
import { Modal } from '../Modal';
import { BillFrom } from './BillFrom';
import { BillTo } from './BillTo';
import { FooterNewInvoice } from './FooterNewInvoice';
import { ItemList } from './ItemList';

export const NewInvoice = () => {

    const dispatch = useDispatch();

    const discardHandler = () => {
        dispatch( closeNewFormModal());
    }

    const onSubmitHandler = (data) => {
        dispatch(addNewInvoice(data));
        dispatch(closeNewFormModal());
    }

    return (  
        <Modal >  
            <button className="flex text-dark-400 text-md/1 pt-8 pl-6 items-center justify-between w-3/9 md:hidden" type="button" title="Go back" onClick={discardHandler}><IconArrowLeft/>Go back</button>
            <h1 className="text-dark-400 dark:text-neutral-200 text-lg/2 pt-7 pl-6 md:text-lg md:pt-16 md:pl-13.5 lg:pt-16">New Invoice</h1>
                <Formik
                    initialValues={invoiceSchema}
                    validationSchema={SignupSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                    onSubmit={async (values, { resetForm }) => {
                    values.paymentDue = getPaymentDue(values.createdAt, values.paymentTerms)
                    values.items.map((item) => item.total = getItemTotal(item))
                    values.total = getTotal(values.items);
                    await onSubmitHandler(values);   
                    resetForm();
                }}>
                    <Form action="POST" className="px-6 py-5 md:pt-[52px] md:pl-13.5 md:pr-14 lg:pr-14 lg:pt-[50px]">
                        <BillFrom />
                        <BillTo />
                        <ItemList />
                        <FooterNewInvoice />
                    </Form>
                </Formik>
        </Modal>
    )
}