//Future todo - create Wrapper component for DRY rule
import {useSelector} from 'react-redux';

import { HeaderHome } from '../components/HeaderHome';
import { InvoiceList } from '../components/InvoiceList';
import { Nav } from '../components/Nav';
import { NewInvoice } from "../components/forms/NewInvoice";


export const Home = () => {
	const loadingStatus = useSelector(state => state.invoices.status);
	const modalStatus = useSelector(state => state.newFormModalStatus.status);

	if (loadingStatus === 'loading') {
		return <div>LOADING</div>;
	}
	return (
		<>
					<div className='flex flex-col relative lg:flex-row lg:justify-center'>
						<Nav />
						<main className='px-6 md:px-12 pt-8 md:pt-15'>
							<HeaderHome />
							<InvoiceList />
						</main>
					</div>
			{modalStatus && <NewInvoice />}
		</>
	);
}

