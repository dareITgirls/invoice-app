//Future todo - create Wrapper component for DRY rule
import {useSelector} from 'react-redux';

import { HeaderHome } from '../components/HeaderHome';
import { InvoiceList } from '../components/InvoiceList';
import { Nav } from '../components/Nav';
import { NewInvoice } from "../components/newInvoice/NewInvoice";
import {Loader} from "../UI/Loader";


export const Home = () => {
	const loadingStatus = useSelector(state => state.invoices.status);
	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	return (
		<>
			{!modalStatus &&
				<>
					<div className='flex flex-col lg:flex-row relative lg:justify-center'>
						<Nav />
						<main className='px-6 md:px-12 pt-8 md:pt-15'>
							<HeaderHome />
							{loadingStatus === 'loading' ? <Loader/> : <InvoiceList />}
						</main>
					</div>
				</>}
			{modalStatus && <NewInvoice />}
		</>
	);
}

