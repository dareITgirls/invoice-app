import { CacheProvider } from '@emotion/react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFormikContext } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectInvoiceById } from '../store/invoicesSlice';
import { cache } from '../utils/consts';
import { today } from '../utils/invoiceSchema';

export const CustomDatePicker = () => {
  const { invoiceId } = useParams();
  const invoice = useSelector((state) => selectInvoiceById(state, invoiceId));
  const date = invoice ? invoice.createdAt : today;
  const { setFieldValue, handleBlur } = useFormikContext();
  const [value, setValue] = useState(dayjs(date));

  const handleChangingDate = (newValue) => {
    setValue(newValue);
    setFieldValue('createdAt', newValue);
  };

  return (
    <CacheProvider value={cache}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="custom-container">
          <InputLabel htmlFor="createdAt" className="custom-label">
            Invoice Date
          </InputLabel>
          <DesktopDatePicker
            className="custom-wrapper"
            name="createdAt"
            id="createdAt"
            inputFormat="DD MMM YYYY"
            views={['day']}
            showDaysOutsideCurrentMonth={true}
            components={{
              openPickerIcon: CalendarTodayIcon,
            }}
            value={value}
            onChange={(newValue) => {
              handleChangingDate(newValue);
            }}
            onBlur={handleBlur}
          />
        </div>
      </LocalizationProvider>
    </CacheProvider>
  );
};
