import { useFormikContext } from 'formik';
import { useState } from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

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
        console.log(e.target.value);
        setValue(e.target.value);
        setFieldValue('paymentTerms', e.target.value);
    }

    return (
        <CacheProvider value={cache}>
            <div className=" text-base/1 flex flex-col py-3">
                <InputLabel htmlFor="payment-terms" className="text-neutral-500 text-base/1">Payment terms</InputLabel>
                <Select
                    className=" rounded w-full cursor-pointer"
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
