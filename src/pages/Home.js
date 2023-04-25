import HeaderHome from '../components/HeaderHome';
import NewInvoice from '../components/NewInvoice';
import { useSelector } from 'react-redux';
import InvoiceList from '../components/InvoiceList';

const Home = () => {
	const loadingStatus = useSelector(state => state.invoices.status);

	if (loadingStatus === 'loading') {
		return <div>LOADING</div>;
	}

	return (
		<>
			<HeaderHome />
			<InvoiceList />
			<NewInvoice />
		</>
	);
};

export default Home;
