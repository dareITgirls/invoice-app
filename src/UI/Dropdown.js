import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { InputLabel,MenuItem, Select } from '@mui/material';
import { useFormikContext } from 'formik';
import { useState } from 'react';

//resetting most of mui styles
const cache = createCache({
  key: 'css',
  prepend: true,
});

export const Dropdown = () => {

    const { setFieldValue, handleBlur } = useFormikContext();
    //state only for mui satisfaction
    const [value, setValue] = useState(30);
    
    const changeValueHandler = (e) => {
        setValue(e.target.value);
        setFieldValue('paymentTerms', e.target.value);
    }

    return (
        <CacheProvider value={cache}>
            <div className=" text-base/1 flex flex-col pt-4 pb-2.5 md:w-full md:mt-1">
                <InputLabel htmlFor="payment-terms" className="text-neutral-500 text-base/2 pb-1 md:pb-2">Payment Terms</InputLabel>
                <Select
                    className=" rounded w-full cursor-pointer dark:bg-dark-100 dark:text-light-200"
                    name="paymentTerms"
                    id="payment-terms"
                    value={value}
                    onChange={(e) => { changeValueHandler(e) }}
                    onBlur={handleBlur}
                    //still not working
                    components={{
                    openPickerIcon: ExpandMore,
                }}
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
