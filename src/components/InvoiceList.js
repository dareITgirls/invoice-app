import {useDispatch, useSelector} from "react-redux";
import {selectInvoiceId} from "../store/invoicesSlice";
import InvoiceItem from "./InvoiceItem";

const InvoiceList = () => {

    const invoiceIds = useSelector(selectInvoiceId)
    console.log(invoiceIds)

    const renderedListItems = invoiceIds.map((el) => {
        return <InvoiceItem key={el} id={el}/>
    })

    return (
        <ul>{renderedListItems}</ul>
    )

}

export default InvoiceList