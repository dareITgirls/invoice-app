import ReactDOM from 'react-dom';
import { Nav } from './Nav';

export const Modal = (props) => {
  const { children } = props;

    return ReactDOM.createPortal(
        <>
            <div id="overlay" className="top-0 left-0 bottom-0 right-0 fixed z-[1] opacity-50 bg-black"><Nav /></div>
            <div id="modal" className='flex flex-col bg-white dark:bg-dark-300 absolute mt-[72px] w-full md:w-[80%] md:mt-[80px] md:rounded-r-2xl lg:w-[42.5%] lg:ml-[105px] lg:mt-0'>{children}</div>
        </>,
        document.getElementById('modal')
    );
};
