import { useFormikContext } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../store/modalStatusSlice";
import { Button } from '../../UI/Button';

export const Footer = () => {

    const { setFieldValue } = useFormikContext();

    const modalStatus = useSelector(state => state.modalStatus.status);
    const dispatch = useDispatch();

    const discardHandler = () => {
        dispatch(closeModal());
        return
    }

    if (modalStatus === false) return null;

    return (
        <footer className="flex items-center justify-between">
            <Button classname="bg-neutral-200 text-neutral-300" type="button" title="Discard"onClick={discardHandler} />
            <Button  classname="bg-dark-300  text-neutral-300" type="submit" title="Save as Draft" onClick={() => setFieldValue('status', 'draft')} />
            <Button classname="bg-primary-200 text-light-200" type="submit" title="Save & Send" onClick={() => setFieldValue('status', 'pending')} />
        </footer>
    )
}