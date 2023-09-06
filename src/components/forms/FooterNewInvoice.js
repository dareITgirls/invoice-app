import { useFormikContext } from 'formik';
import { useDispatch } from "react-redux";
import { addNewInvoice } from '../../store/invoicesActions';
import { toggleFormModal } from "../../store/formModalStatusSlice";
import { calculateInvoiceValues } from '../../utils/consts';
import { Button } from '../../UI/Button';

export const FooterNewInvoice = () => {
    const { setFieldValue, values, resetForm } = useFormikContext();
    const dispatch = useDispatch();

    const handleDiscard = () => {
        dispatch(toggleFormModal(false));
    }

    const handleSavingAsDraft = () => {
        values.status = 'draft';
        calculateInvoiceValues(values);
        dispatch(addNewInvoice(values));
        resetForm();
        dispatch(toggleFormModal(false));
    }

    return (
        <footer className="flex w-full items-center justify-center md:justify-between gap-4 bg-white dark:bg-dark-300 fixed bottom-0 left-0 lg:static py-8 pb-4 md:px-14">
            <Button styles="bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                    type="button"
                    title="Discard"
                    onClick={handleDiscard} />
            <Button styles="bg-dark-500 text-neutral-300 dark:bg-dark-200 dark:text-neutral-200 hover:bg-dark-600 md:hidden"
                    type="button"
                    title="Save as Draft"
                    onClick={handleSavingAsDraft} />
            <Button styles="bg-primary-200 text-white hover:bg-primary-100 md:hidden"
                    type="submit"
                    title="Save & Send"
                    onClick={() => setFieldValue('status', 'pending')} />
            <div className="hidden md:flex md:space-x-2 lg:space-x-[6px]">
                <Button styles="bg-dark-500  text-neutral-300 dark:bg-dark-200 dark:text-neutral-200 hover:bg-dark-600"
                        type="button" title="Save as Draft"
                        onClick={handleSavingAsDraft} />
                <Button styles="bg-primary-200 text-white hover:bg-primary-100"
                        type="submit"
                        title="Save & Send"
                        onClick={() => setFieldValue('status', 'pending')} />
            </div>
        </footer>
    )
}