import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Nav } from '../components/Nav';
import { NoAuth } from '../components/NoAuth';
import { ErrorPage } from './Error';
import { logErrorToService } from '../utils/consts';

export const Root = () => {
	const user = useSelector(state => state.authSlice.user);

	return (
		<>
			<Nav />
			<main className='flex flex-col justify-center items-center mt-10'>
				{user ? <Navigate to='/invoices' /> : <ErrorBoundary FallbackComponent={ErrorPage} onError={logErrorToService}><NoAuth /></ErrorBoundary>}

				<Outlet />
			</main>
		</>
	);
};
