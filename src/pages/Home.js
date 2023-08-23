import {useSelector} from 'react-redux';
import { NewInvoice } from "../components/forms/NewInvoice";
import { HeaderHome } from '../components/HeaderHome';
import { InvoiceList } from '../components/InvoiceList';
import { Nav } from "../components/Nav";
import { Loader } from "../UI/Loader";
import { MainContentWrapper } from "../UI/MainContentWrapper";


export const Home = () => {
  const loadingStatus = useSelector((state) => state.invoices.status);
  const error = useSelector((state) => state.invoices.error);

  //take care of asynchronous errors and throw them in runtime
  if (error) {
    throw new Error(error.message)
	}

  // TODO: delete this comment, just to showcase errorboundary
//   if (loadingStatus === 'loading') {
//     return <div>loadng....</div>
//   }

  const modalStatus = useSelector((state) => state.newFormModalStatus.status);

	return (
		<>
				<div className='flex flex-col lg:flex-row relative lg:justify-center'>
					<Nav/>
					<MainContentWrapper>
						<HeaderHome />
						{loadingStatus === 'loading' ? <Loader/> : <InvoiceList />}
					</MainContentWrapper>
				</div>
			{modalStatus && <NewInvoice />}
		</>
	);
}

