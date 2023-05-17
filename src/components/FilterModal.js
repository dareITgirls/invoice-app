import {useDispatch, useSelector} from "react-redux";
import {closeFilterModal, invoiceStatusFilterChanged} from "../store/filterModalSlice";


const FilterModal = () => {

    const modalStatus = useSelector(state => state.filterModal.status)
    const invoiceStatusToFilter = useSelector(state => state.filterModal.invoiceStatusToFilter)

    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(closeFilterModal())
    }
    // const onInvoiceStatusChange = (invoiceStatus, changeType) => {
    //     dispatch(invoiceStatusFilterChanged(invoiceStatus, changeType ))
    // }

    if (modalStatus === false) return null;

    return (
        <div>
            <h1 onClick={closeModal}>Filters</h1>
        </div>
    )
}

export default FilterModal