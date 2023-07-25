import ReactDOM from "react-dom";

export const Modal = (props) => {
  const { children } = props;

  return ReactDOM.createPortal(
    <div id='modal-wrapper'>
      <div id='overlay'></div>
      <div id='modal' className='flex flex-col'>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};
