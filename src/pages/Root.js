import { Navigate, Outlet } from 'react-router-dom';

import { Nav } from '../components/Nav';
import { useAuth } from '../hooks/useAuth';

export const Root = () => {
	const { user } = useAuth();

	return (
		<>
			<Nav />

			<main className='flex flex-col justify-center items-center mt-10'>
				{user ? <Navigate to='/invoices' /> : <h1>To see invoice list please sign in!</h1>}

				<Outlet />
			</main>
		</>
	);
};
