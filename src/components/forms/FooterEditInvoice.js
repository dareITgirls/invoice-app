import { useFormikContext } from 'formik';
import { useDispatch } from "react-redux";
import { closeNewFormModal } from "../../store/newFormModalStatusSlice";
import { Button } from '../../UI/Button';

export const FooterEditInvoice = () => {

    const { setFieldValue } = useFormikContext();
    const dispatch = useDispatch();

    const discardHandler = () => {
        dispatch(closeNewFormModal());
    }

    return (
        <footer className="flex items-center justify-end rounded-xl space-x-2 lg:space-x-[6px] bg-white dark:bg-dark-300  md:fixed md:w-[72.8%] md:pr-[56px] md:bottom-0 md:pb-4 lg:static lg:w-full lg:pr-0 lg:mt-0 lg:mb-3">
                <Button styles="bg-dark-500  text-neutral-300 dark:bg-dark-200 dark:text-neutral-200" type="button" title="Cancel" onClick={discardHandler} />
                <Button styles="bg-primary-200 text-white" type="submit" title="Save Changes" onClick={() => setFieldValue('status', 'pending')} />
        </footer>
    )
}