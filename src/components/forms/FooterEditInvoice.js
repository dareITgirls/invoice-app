import { useFormikContext } from 'formik';
import { useDispatch } from "react-redux";
import { toggleFormModal } from "../../store/formModalStatusSlice";
import { Button } from '../../UI/Button';

export const FooterEditInvoice = () => {
    const { setFieldValue } = useFormikContext();
    const dispatch = useDispatch();
    
    const handleDiscard = () => {
        dispatch(toggleFormModal(false));
    }

    return (
        <footer className="flex w-full items-center justify-center md:justify-around gap-4 bg-white dark:bg-dark-300 fixed bottom-0 left-0 lg:static py-8 pb-4 md:px-14">
                <Button styles="bg-neutral-100 text-neutral-500 dark:bg-dark-200 dark:text-neutral-200 hover:bg-neutral-200"
                        type="button"
                        title="Cancel"
                        onClick={handleDiscard} />
                <Button styles="bg-primary-200 text-white hover:bg-primary-100"
                        type="submit"
                        title="Save Changes"
                        onClick={() => setFieldValue('status', 'pending')} />
        </footer>
    )
}