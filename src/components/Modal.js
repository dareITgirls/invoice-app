import ReactDOM from 'react-dom';

export const Modal = (props) => {
    const { children } = props;

    return ReactDOM.createPortal(
        <div id="modal-wrapper" >
            <div id="overlay" className="top-0 left-0 bottom-0 right-0 md:fixed z-index-1 bg-neutral-300"></div>
            <div id="modal" className='flex flex-col bg-light-200 dark:bg-dark-300 md:absolute z-index-3 md:w-[80%] md:ml-6 md:mt-27 md:rounded-r-2xl lg:w-[70%]'>{children}</div>
        </div>,
        document.getElementById('modal')
    );
};