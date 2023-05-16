import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { useField } from 'formik';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { today } from '../utils/invoiceSchema';

export const CustomDatePicker = (props) => {

    const { setFieldValue, handleBlur } = useFormikContext();
    const [value, setValue] = useState(dayjs(today));
    const [field, meta] = useField('createdAt');
    
    const changeValueHandler = (newValue) => {
        setValue(newValue);
        setFieldValue('createdAt', newValue.$d);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <p className="text-neutral-500 text-base/1">Invoice date</p>
            <DatePicker
                className="text-dark-400 text-md/1 p-3 border rounded w-full"
                name="createdAt"
                inputFormat="YYYY/MM/DD"
                views={["day", 'month']}
                showDaysOutsideCurrentMonth={true}
                components={{
                    openPickerIcon: CalendarTodayIcon,
                }}
                InputProps={{
                    sx: {
                        "& .MuiSvgIcon-root": {
                        color: "blue"
                    }
                    }
                }}
                value={value}
                onChange={(newValue) => { changeValueHandler(newValue) }}
                onBlur={handleBlur}
                renderInput={(params) => {
                    return <TextField {...params} />;
                }}
            />
            </LocalizationProvider>
    )
}