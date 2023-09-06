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
                <Button variant="neutral"
                        type="button"
                        title="Cancel"
                        onClick={handleDiscard} />
                <Button variant="primary"
                        type="submit"
                        title="Save Changes"
                        onClick={() => setFieldValue('status', 'pending')} />
        </footer>
    )
}