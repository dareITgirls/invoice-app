import HeaderHome from '../components/HeaderHome';
import { useSelector } from 'react-redux';
import InvoiceList from '../components/InvoiceList';
import Nav from '../components/Nav';

//Future todo - create Wrapper component for DRY rule

const Home = () => {
	const loadingStatus = useSelector(state => state.invoices.status);

	if (loadingStatus === 'loading') {
		return <div>LOADING</div>;
	}

	return (
		<>
			<div className='flex flex-col lg:flex-row relative lg:justify-center'>
				<Nav />

				<main className='px-6 md:px-12 pt-8 md:pt-15'>
					<HeaderHome />
					<InvoiceList />
				</main>
			</div>
		</>
	);
};

export default Home;
