import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../store/modalStatusSlice";

const HeaderHome = () => {

    const invoices = useSelector(state => state.invoices.entities)
    const invoicesNumber = Object.keys(invoices).length;

    const dispatch = useDispatch()
    const openNewInvoice = () => {
        dispatch(openModal());
    }

    return (
        <div>
            <h1>Invoices</h1>
            <h6>There are {invoicesNumber} total invoices</h6>
            <button onClick={openNewInvoice}>New invoice</button>

        </div>
    )
}

export default HeaderHome