import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import { toggleFormModal } from '../../store/formModalStatusSlice';
import { Button } from '../../UI/Button';

export const FooterEditInvoice = () => {
  const { setFieldValue } = useFormikContext();
  const dispatch = useDispatch();

  const handleDiscard = () => {
    dispatch(toggleFormModal(false));
  };

  return (
    <footer className="flex items-center justify-center gap-4 rounded-xl w-full pr-12 bg-white dark:bg-dark-300 fixed md:w-[80%] md:justify-between md:px-[56px] md:ml-[-54px] bottom-0 pb-4 lg:static lg:ml-0 lg:pl-0 lg:w-full lg:pr-0 lg:mt-0 lg:mb-3">
      <Button
        styles="bg-dark-500  text-neutral-300 dark:bg-dark-200 dark:text-neutral-200"
        type="button"
        title="Cancel"
        onClick={handleDiscard}
      />
      <Button
        styles="bg-primary-200 text-white"
        type="submit"
        title="Save Changes"
        onClick={() => setFieldValue('status', 'pending')}
      />
    </footer>
  );
};
