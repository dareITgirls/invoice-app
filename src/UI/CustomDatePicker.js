import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 
import dayjs from 'dayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
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
    
    const changeDateHandler = (newValue) => {
        setValue(newValue);
        setFieldValue('createdAt', newValue);
    }

    return (
        <CacheProvider value={cache}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className=" text-base/1 flex flex-col pt-4 pb-2.5 md:w-full">
                <InputLabel htmlFor='createdAt' className="text-neutral-500 text-base/2 pb-2 ">Invoice Date</InputLabel>
                <DesktopDatePicker
                    className="rounded w-full cursor-pointer dark:bg-dark-100 dark:text-light-200"
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