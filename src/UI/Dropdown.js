import { CacheProvider } from '@emotion/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useFormikContext } from 'formik';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { selectInvoiceById } from "../store/invoicesSlice";
import { cache } from '../utils/consts';


export const Dropdown = () => {
    const { invoiceId } = useParams();
    const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));
    const terms  = invoice ? invoice.paymentTerms : 30
    const { setFieldValue, handleBlur } = useFormikContext();
    const [value, setValue] = useState(terms);
    
    const handleChangingValue = (e) => {
        setValue(e.target.value);
        setFieldValue('paymentTerms', e.target.value);
    }

    return (
        <CacheProvider value={cache}>
            <div className="custom-container">
                <InputLabel htmlFor="payment-terms" className="custom-label">Payment Terms</InputLabel>
                <Select
                    className="custom-wrapper"
                    name="paymentTerms"
                    id="payment-terms"
                    value={value}
                    onChange={(e) => { handleChangingValue(e) }}
                    onBlur={handleBlur}
                    IconComponent={ExpandMoreIcon}
             
                >
                        <MenuItem value={1}>Net 1 Day</MenuItem>
                        <MenuItem value={7}>Net 7 Days</MenuItem>
                        <MenuItem value={14}>Net 14 Days</MenuItem>
                        <MenuItem value={30}>Net 30 Days</MenuItem>    
                </Select>
            </div>
        </CacheProvider>
    )
}
