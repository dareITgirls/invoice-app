import { ReactComponent as IllustrationEmpty } from "../assets/illustration-empty.svg";
import ErrorHandler from "../pages/Error";
export const EmptyInvoiceList = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-20 gap-6 font-bold text-center md:mt-49.5 lg:mt-36 lg:gap-7'>
      <IllustrationEmpty className='scale-80 md:scale-100' />

      <h2 className='text-lg md:mt-10'>There is nothing here</h2>

      <p className='text-base/2 max-w-25ch -mt-0.5 leading-4 lg:-mt-1.5'>
        Create
        <span className='hidden md:inline lg:hidden'> a new </span>
        <span className='md:hidden lg:inline'> an </span>
        invoice by clicking the
        <span> New </span>
        <span className='hidden md:inline'>Invoice </span>
        button and get started
      </p>
    </section>
  );
};

export default ErrorHandler(EmptyInvoiceList);
