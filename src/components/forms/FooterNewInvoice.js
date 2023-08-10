import { useFormikContext } from 'formik';
import { useDispatch } from "react-redux";
import { addNewInvoice } from '../../store/invoicesActions';
import { closeNewFormModal } from "../../store/newFormModalStatusSlice";
import { calculateInvoiceValues } from '../../utils/consts';
import { Button } from '../../UI/Button';

export const FooterNewInvoice = () => {

    const { setFieldValue, values, resetForm } = useFormikContext();
    const dispatch = useDispatch();

    const handleDiscard = () => {
        dispatch(closeNewFormModal());
    }

    const handleSavingAsDraft = () => {
        values.status = 'draft';
        calculateInvoiceValues(values);

        dispatch(addNewInvoice(values));
        resetForm();
        dispatch(closeNewFormModal());
    }

    return (
        <footer className="flex items-center justify-between rounded-xl bg-white dark:bg-dark-300  fixed md:w-[72.8%] md:pr-[56px] bottom-0 pb-4 lg:static lg:w-full lg:pr-0 lg:mt-0 lg:mb-3">
            <Button styles="bg-neutral-100 text-neutral-500" type="button" title="Discard" onClick={handleDiscard} />
            <Button styles="bg-dark-500  text-neutral-300 dark:bg-dark-200 dark:text-neutral-200 md:hidden" type="button" title="Save as Draft" onClick={handleSavingAsDraft} />
            <Button styles="bg-primary-200 text-white md:hidden" type="submit" title="Save & Send" onClick={() => setFieldValue('status', 'pending')} />
            <div className="hidden md:flex md:space-x-2 lg:space-x-[6px]">
                <Button styles="bg-dark-500  text-neutral-300 dark:bg-dark-200 dark:text-neutral-200" type="button" title="Save as Draft" onClick={handleSavingAsDraft} />
                <Button styles="bg-primary-200 text-white" type="submit" title="Save & Send" onClick={() => setFieldValue('status', 'pending')} />
            </div>
        </footer>
    )
}