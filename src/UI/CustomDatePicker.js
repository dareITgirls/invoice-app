import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 
import dayjs from 'dayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { InputLabel } from '@mui/material';
import { useFormikContext } from 'formik';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { today } from '../utils/invoiceSchema';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

//resetting most of mui styles
const cache = createCache({
  key: 'css',
  prepend: true,
});

export const CustomDatePicker = () => {

    const { setFieldValue, handleBlur } = useFormikContext();
    //state only for mui satisfaction
    const [value, setValue] = useState(dayjs(today));
    
    const changeValueHandler = (newValue) => {
        console.log(newValue);
        setValue(newValue);
        setFieldValue('createdAt', newValue.$d);
    }

    return (
        <CacheProvider value={cache}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <InputLabel htmlFor='createdAt' className="text-neutral-500 text-base/1">Invoice date</InputLabel>
            <DesktopDatePicker
                className=" rounded w-full cursor-pointer"
                name="createdAt"
                id="createdAt"
                inputFormat="YYYY/MM/DD"
                views={["day"]}
                showDaysOutsideCurrentMonth={true}
                components={{
                    openPickerIcon: CalendarTodayIcon,
                }}
                value={value}
                onChange={(newValue) => { changeValueHandler(newValue) }}
                onBlur={handleBlur}
            />
            </LocalizationProvider>
            </CacheProvider>
    )
}