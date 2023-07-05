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
import { cache } from '../utils/consts';


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
            <div className="text-custom/1 flex flex-col pt-4 pb-2.5 md:w-full md:mt-1">
                <InputLabel htmlFor='createdAt' className="text-neutral-500 text-custom/1 pb-2 ">Invoice Date</InputLabel>
                <DesktopDatePicker
                    className="rounded w-full cursor-pointer dark:bg-dark-100"
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