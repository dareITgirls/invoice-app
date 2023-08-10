import { Form,Formik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addNewInvoice } from '../../store/invoicesActions';
import { editInvoice } from "../../store/invoicesActions";
import { selectInvoiceById } from "../../store/invoicesSlice";
import { closeNewFormModal } from "../../store/newFormModalStatusSlice";
import { ReactComponent as IconArrowLeft } from '../../assets/icon-arrow-left.svg';
import { getItemTotal, getPaymentDue, getTotal } from '../../utils/consts';
import { createInvoiceId } from '../../utils/consts';
import { SignupSchema } from '../../utils/validation';
import { invoiceSchema } from '../../utils/invoiceSchema';
import { Modal } from '../Modal';
import { BillFrom } from './BillFrom';
import { BillTo } from './BillTo';
import { FooterNewInvoice } from './FooterNewInvoice';
import { FooterEditInvoice } from './FooterEditInvoice';
import { ItemList } from './ItemList';

export const FormTemplate = (props) => {

    const { type } = props;

    const dispatch = useDispatch();

    const getInvoiceValues = () => {
        if (type === 'edit') {
            const { invoiceId } = useParams();

            const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));

            const unfreezedInvoice = structuredClone(invoice);
            return unfreezedInvoice;
        }
    }

    const discardHandler = () => {
        dispatch( closeNewFormModal());
    }

    const onSubmitHandler = (data) => {
        console.log(data);
        type === 'edit' ? dispatch(editInvoice(data)) : dispatch(addNewInvoice(data));
        dispatch(closeNewFormModal());
    }

    return (  
        <Modal >  
            <button className="flex text-dark-400 text-md/1 pt-8 pl-6 items-center justify-between w-3/9 md:hidden" type="button" title="Go back" onClick={discardHandler}><IconArrowLeft/>Go back</button>
            <h1 className="text-dark-400 dark:text-neutral-200 text-lg/2 pt-7 pl-6 md:text-lg md:pt-16 md:pl-13.5 lg:pt-16">{type === 'new' ? 'New Invoice' : `Edit #${getInvoiceValues().id}`}</h1>
                <Formik
                    initialValues={type === 'new' ? invoiceSchema : getInvoiceValues()}
                    validationSchema={SignupSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                    onSubmit={async (values, { resetForm }) => {
                        values.id === '' ? values.id = createInvoiceId() : values.id;
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
                        {type === 'new' ? <FooterNewInvoice /> :
                        <FooterEditInvoice /> }
                    </Form>
                </Formik>
        </Modal>
    )
}