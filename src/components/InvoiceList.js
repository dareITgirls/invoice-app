import { useSelector } from "react-redux";

import { selectFilteredInvoiceId } from "../store/invoicesSlice";
import { InvoiceListEmpty } from "./InvoiceListEmpty";
import { InvoiceListItem } from "./InvoiceListItem";

export const InvoiceList = () => {
    const invoiceIds = useSelector(selectFilteredInvoiceId);
    const allInvoices = useSelector((state) => state.invoices.entities);
    const loadingStatus = useSelector((state) => state.invoices.status);
    const invoicesNumber = Object.keys(allInvoices).length;

    const renderedListItems = invoiceIds.map((id) => {
        return <InvoiceListItem key={id} id={id} />;
    });

    if (invoicesNumber === 0 && loadingStatus === 'idle') return <InvoiceListEmpty />;

    return (
        <ul className='flex flex-col pt-8 md:pt-14 pb-26 gap-4'>
              {renderedListItems}
        </ul>
    );
};
