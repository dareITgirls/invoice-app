import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices } from './store/invoicesActions';
import Home from './pages/Home';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchInvoices());
	}, []);

	useEffect(() => {
		document.body.classList.add('bg-light-200', 'dark:bg-dark-300', 'font-sans');
	}, []);

	return <Home />;
}
export default App;
