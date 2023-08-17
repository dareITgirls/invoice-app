import { Nav } from "../components/Nav";
import { MainContentWrapper } from "../UI/MainContentWrapper";
import { HeaderHome } from '../components/HeaderHome';
import { InvoiceList } from '../components/InvoiceList';
import { Loader } from "../UI/Loader";
import { NewInvoice } from "../components/forms/NewInvoice";


export const Home = () => {
  const loadingStatus = useSelector((state) => state.invoices.status);
  const modalStatus = useSelector((state) => state.newFormModalStatus.status);

	return (
		<>
      {!modalStatus && (
        <div className='flex flex-col lg:flex-row relative lg:justify-center'>
          <Nav />
          <MainContentWrapper>
            <HeaderHome />
            {loadingStatus === 'loading' ? <Loader /> : <InvoiceList />}
          </MainContentWrapper>
        </div>)}
			{modalStatus && <NewInvoice />}
		</>
	);
}

