import HeaderHome from '../components/HeaderHome';
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
		</>
	);
};

export default Home;
