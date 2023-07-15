import { useFormikContext } from 'formik';
import { useDispatch } from "react-redux";
import { addNewInvoice } from '../../store/invoicesActions';
import { closeNewFormModal } from "../../store/newFormModalStatusSlice";
import { Button } from '../../UI/Button';
import { getItemTotal, getPaymentDue,getTotal } from '../../utils/consts';

export const Footer = () => {

    const { setFieldValue, values, resetForm } = useFormikContext();
    const dispatch = useDispatch();

    const discardHandler = () => {
        dispatch(closeNewFormModal());
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
        <footer className="flex items-center justify-between dark:bg-dark-300  md:mt-[-16px] lg:mt-0 lg:mb-3">
            <Button styles="bg-neutral-100 text-neutral-500" type="button" title="Discard" onClick={discardHandler} />
            <Button styles="bg-dark-500  text-neutral-300 dark:bg-dark-200 dark:text-neutral-200 md:hidden" type="button" title="Save as Draft" onClick={saveAsDraftHandler} />
            <Button styles="bg-primary-200 text-white md:hidden" type="submit" title="Save & Send" onClick={() => setFieldValue('status', 'pending')} />
            <div className="hidden md:flex md:space-x-2 lg:space-x-[6px]">
                <Button styles="bg-dark-500  text-neutral-300 dark:bg-dark-200 dark:text-neutral-200" type="button" title="Save as Draft" onClick={saveAsDraftHandler} />
                <Button styles="bg-primary-200 text-white" type="submit" title="Save & Send" onClick={() => setFieldValue('status', 'pending')} />
            </div>
        </footer>
    )
}