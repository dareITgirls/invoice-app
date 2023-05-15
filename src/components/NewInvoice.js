import {useDispatch, useSelector} from "react-redux";
import {closeNewFormModal} from "../store/newFormModalStatusSlice";


const NewInvoice = () => {

    const modalStatus = useSelector(state => state.newFormModalStatus.status)

    const dispatch = useDispatch()
    const closeNewInvoice = () => {
        dispatch(closeNewFormModal())
    }

    if (modalStatus === false) return null;

    return (
        <div>
            <h1 onClick={closeNewInvoice}>New Invoice Form</h1>
        </div>
    )
}

export default NewInvoice