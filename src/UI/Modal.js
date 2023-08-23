import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const Modal = ({className, discardHandler, modalStatus, children }) => {
  return (
    <ReactModal
				aria={{
					labelledby: 'title',
					describedby: 'full_description',
				}}
				bodyOpenClassName={'overflow-hidden'}
				className={className}
				closeTimeoutMS={150}
				isOpen={modalStatus}
				onRequestClose={discardHandler}
				shouldCloseOnOverlayClick={true}
				style={{
					overlay: {
						backgroundColor: '#00000080',
					},
          }}>{children}
      </ReactModal>
  )
}
		





