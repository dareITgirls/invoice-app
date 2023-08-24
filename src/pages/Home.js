import {useSelector} from 'react-redux';
import { NewInvoice } from "../components/forms/NewInvoice";
import { HeaderHome } from '../components/HeaderHome';
import { InvoiceList } from '../components/InvoiceList';
import { Nav } from "../components/Nav";
import { Loader } from "../UI/Loader";
import { MainContentWrapper } from "../UI/MainContentWrapper";


export const Home = () => {
	const loadingStatus = useSelector((state) => state.invoices.status);
	const modalStatus = useSelector((state) => state.newFormModalStatus.status);
	const error = useSelector((state) => state.invoices.error);

	if (error) {
		throw new Error(error.message)
	}

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

