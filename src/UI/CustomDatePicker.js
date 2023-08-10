import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { InputLabel } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { useFormikContext } from 'formik';
import dayjs from 'dayjs';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { selectInvoiceById } from "../store/invoicesSlice";
import { today } from '../utils/invoiceSchema';
import { cache } from '../utils/consts';


export const CustomDatePicker = () => {
    const { invoiceId } = useParams();
    const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));
    const date  = invoice ? invoice.createdAt : today
    const { setFieldValue, handleBlur } = useFormikContext();
    const [value, setValue] = useState(dayjs(date));
   
    const changeDateHandler = (newValue) => {
        setValue(newValue);
        setFieldValue('createdAt', newValue);
    }

    return (
        <CacheProvider value={cache}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="custom-container">
                    <InputLabel htmlFor='createdAt' className="custom-label">Invoice Date</InputLabel>
                    <DesktopDatePicker
                        className="custom-wrapper"
                        name="createdAt"
                        id="createdAt"
                        inputFormat="DD MMM YYYY"
                        views={["day"]}
                        showDaysOutsideCurrentMonth={true}
                        components={{
                        openPickerIcon: CalendarTodayIcon,
                        }}
                        value={value}
                        onChange={(newValue) => { changeDateHandler(newValue) }}
                        onBlur={handleBlur}
                    />
                </div>
            </LocalizationProvider>
        </CacheProvider>
    )
}