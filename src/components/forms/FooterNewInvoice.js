import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import { toggleFormModal } from '../../store/formModalStatusSlice';
import { addNewInvoice } from '../../store/invoicesActions';
import { Button } from '../../UI/Button';
import { calculateInvoiceValues } from '../../utils/consts';

export const FooterNewInvoice = () => {
  const { setFieldValue, values, resetForm } = useFormikContext();
  const dispatch = useDispatch();

  const handleDiscard = () => {
    dispatch(toggleFormModal(false));
  };

  const handleSavingAsDraft = () => {
    values.status = 'draft';
    calculateInvoiceValues(values);
    dispatch(addNewInvoice(values));
    resetForm();
    dispatch(toggleFormModal(false));
  };

  return (
    <footer className="flex w-full items-center justify-center md:justify-between gap-4 bg-white dark:bg-dark-300 fixed bottom-0 left-0 lg:static py-8 pb-4 md:px-14">
      <Button
        type="button"
        variant="neutral"
        title="Discard"
        onClick={handleDiscard}
      />
      <Button
        styles="md:hidden"
        type="button"
        variant="neutral-dark"
        title="Save as Draft"
        onClick={handleSavingAsDraft}
      />
      <Button
        styles="md:hidden"
        variant="primary"
        type="submit"
        title="Save & Send"
        onClick={() => setFieldValue('status', 'pending')}
      />
      <div className="hidden md:flex md:space-x-2 lg:space-x-[6px]">
        <Button
          variant="neutral-dark"
          type="button"
          title="Save as Draft"
          onClick={handleSavingAsDraft}
        />
        <Button
          type="submit"
          variant="primary"
          title="Save & Send"
          onClick={() => setFieldValue('status', 'pending')}
        />
      </div>
    </footer>
  );
};
