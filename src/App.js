import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices } from './store/invoicesActions';
import Home from './pages/Home';

function App() {
	//mozecie popatrzec czy wyniki sie wyswietlaja
	const invoicesList = useSelector(state => state.invoices.entities);
	const dispatch = useDispatch();
	console.log(invoicesList);

	useEffect(() => {
		dispatch(fetchInvoices());
	}, []);

	return <Home />;
}
export default App;
