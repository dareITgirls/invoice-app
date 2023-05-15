import { Formik, Form } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import { closeModal } from "../../store/modalStatusSlice";
import { invoiceSchema } from '../../utils/invoiceSchema';
import { SignupSchema } from '../../utils/validation';
import { ASSETS_LIBRARY } from '../../utils/consts';
import { Modal } from '../Modal';
import { BillFrom } from './BillFrom';
import { BillTo } from './BillTo';
import { ItemList } from './ItemList';
import { Footer } from './Footer';
import { Button } from '../../UI/Button';

export const NewInvoice = () => {

    const modalStatus = useSelector(state => state.modalStatus.status);
    const dispatch = useDispatch();

    const discardHandler = () => {
        dispatch(closeModal());
        return
    }

    if (modalStatus === false) return null;

    const onSubmitHandler = (data) => {
        console.log(data); 
    }

    const getItemTotal = (item) => {
        return item.quantity * item.price
    }

    const getTotal = (items) => {
        return items.map((item) => item.total).reduce((sum, num) => sum + num, 0);
    }
    
    const getPaymentDue = (createdAt, paymentTerms) => {
        const paymentDue = new Date();
        const date = new Date(createdAt)
        const dayInFuture = date.getDate() + Number(paymentTerms)
        paymentDue.setDate(dayInFuture)
        return paymentDue.toISOString().split('T')[0]
    }

    return (
        <Modal>
            {/* only on mobile button */}
            <button className="flex text-dark-400 text-md/1 pt-6 pl-6 items-center justify-between w-2/6"type="button" title="Go back" onClick={discardHandler}><img src={ASSETS_LIBRARY.icons.arrowLeft} alt='left arrow'/>Go back</button>
        <h1 className="text-dark-400 text-xl pt-6 pl-6">New Invoice</h1>
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

                    <Form action="POST" className="p-6">
                        <BillFrom />
                        <BillTo />
                        <ItemList />
                        <Footer />
                    </Form>
        </Formik>
    </Modal>
    )

}