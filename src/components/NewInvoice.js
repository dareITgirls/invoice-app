import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../store/modalStatusSlice";


const NewInvoice = () => {

    const modalStatus = useSelector(state => state.modalStatus.status)

    const dispatch = useDispatch()
    const closeNewInvoice = () => {
        dispatch(closeModal())
    }

    if (modalStatus === false) return null;

    return (
        <div>
            <h1 onClick={closeNewInvoice}>New Invoice Form</h1>
        </div>
    )
}

export default NewInvoice