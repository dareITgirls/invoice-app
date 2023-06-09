import { useFormikContext } from 'formik';
import { useDispatch } from "react-redux";
import { closeNewFormModal } from "../../store/newFormModalStatusSlice";
import { addNewInvoice } from '../../store/invoicesActions';
import { Button } from '../../UI/Button';
import { getItemTotal, getTotal, getPaymentDue } from '../../utils/consts';

export const Footer = () => {

    const { setFieldValue, values, resetForm } = useFormikContext();
    const dispatch = useDispatch();

    const discardHandler = () => {
        dispatch(closeNewFormModal());
        return
    }

    const saveAsDraftHandler = () => {
        values.status = 'draft';
        values.paymentDue = getPaymentDue(values.createdAt, values.paymentTerms);
        if (values.items.length > 0) {
            values.items.map((item) => item.total = getItemTotal(item))
            values.total = getTotal(values.items);
        }   
        dispatch(addNewInvoice(values));
        resetForm();
        dispatch(closeNewFormModal());
    }

    return (
        <footer className="flex items-center justify-between dark: bg-dark-100 m-[-24px] p-6">
            <Button styles="bg-neutral-200 text-neutral-300 " type="button" title="Discard" onClick={discardHandler} />
            <Button styles="bg-dark-300  text-neutral-300 md:hidden" type="button" title="Save as Draft" onClick={saveAsDraftHandler} />
            <Button styles="bg-primary-200 text-light-200 md:hidden" type="submit" title="Save & Send" onClick={() => setFieldValue('status', 'pending')} />
            <div className="hidden md:flex md:space-x-4">
                <Button styles="bg-dark-300  text-neutral-300" type="button" title="Save as Draft" onClick={saveAsDraftHandler} />
                <Button styles="bg-primary-200 text-light-200" type="submit" title="Save & Send" onClick={() => setFieldValue('status', 'pending')} />
            </div>
        </footer>
    )
}