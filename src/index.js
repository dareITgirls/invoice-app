import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { ProtectedRoute } from './helpers/ProtectedRoute';
import { ErrorPage } from './pages/Error';
import InvoiceView from './pages/InvoiceView';
import { Root } from './pages/Root';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Root />} />

			<Route path='/invoices' element={<ProtectedRoute />}>
				<Route index element={<App />} />
			</Route>

			<Route path=':invoiceId' element={<ProtectedRoute />}>
				<Route index element={<InvoiceView />} />
			</Route>

			<Route path='*' element={<ErrorPage error={{ message: 'The page you’re looking for can’t be found.' }} />} />
		</>
	)
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
