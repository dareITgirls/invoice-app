import {useSelector} from "react-redux";
import {selectInvoiceById} from "../store/invoicesSlice";

const InvoiceItem = ({id}) => {

    const allInvoices = useSelector(state => state.invoices.entities)
    const invoice = useSelector((state) => selectInvoiceById(state, id))

    const invoicesNumber = Object.keys(allInvoices).length;


    if (invoicesNumber === 0) return <p>There is nothing here</p>

    return (
        <li>
            <table>
                <tr>
                    <td>{invoice.id}</td>
                    <td>{invoice.paymentDue}</td>
                    <td>{invoice.clientName}</td>
                    <td>£ {invoice.total}</td>
                    <td>{invoice.status}</td>
                </tr>
            </table>
        </li>
    )
}

export default InvoiceItem