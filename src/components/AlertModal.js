import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { toggleAlertModal } from '../store/alertModalStatusSlice';
import { Modal } from '../UI/Modal';

ReactModal.setAppElement('#root');

export const AlertModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, invoiceId } = props;
  const modalStatus = useSelector((state) => state.alertModalStatus.status);
  const dispatch = useDispatch();

  const handleDiscard = () => {
    dispatch(toggleAlertModal(false));
  };

  const className =
    'flex flex-col gap-3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[30rem] shadow-3xl bg-light-100 dark:bg-dark-200 p-4 md:p-12 rounded-lg z-20';

  return (
    <>
      <Modal
        className={className}
        handleDiscard={handleDiscard}
        modalStatus={modalStatus}
      >
        <h2
          autoFocus
          className="mt-1 text-md/1 lg:text-lg/2 dark:text-light-100 font-bold focus:outline-none focus:border-primary-100 focus:border-2"
          id="title"
          tabIndex="0"
        >
          Confirm Deletion
        </h2>
        <p
          className="text-base/2 text-neutral-300 dark:text-neutral-200 font-medium leading-[1.375rem]"
          id="full_description"
        >
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.
        </p>
        <div className="flex gap-2 self-end mt-1">{children}</div>
      </Modal>
    </>
  );
};
