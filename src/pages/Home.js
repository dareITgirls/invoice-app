//Future todo - create Wrapper component for DRY rule
import HeaderHome from '../components/HeaderHome';
import {useSelector} from 'react-redux';
import InvoiceList from '../components/InvoiceList';
import { Nav } from '../components/Nav';
import { NewInvoice } from "../components/newInvoice/NewInvoice";


const Home = () => {
	const loadingStatus = useSelector(state => state.invoices.status);
	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	if (loadingStatus === 'loading') {
		return <div>LOADING</div>;
	}
	return (
		<>
			{!modalStatus &&
				<>
					<div className='flex flex-col lg:flex-row relative lg:justify-center'>
						<Nav />
						<main className='px-6 md:px-12 pt-8 md:pt-15'>
							<HeaderHome />
							<InvoiceList />
						</main>
					</div>
				</>}
			{modalStatus && <NewInvoice />}
		</>
	);
}

export default Home;
